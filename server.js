import { DurableObject } from "cloudflare:workers";

const DEFAULT_OFFER_DURATION_MS = 72 * 60 * 60 * 1000; // 72 giờ
const STORAGE_KEY = "landing-page-ai-state";

export class Gadget extends DurableObject {
  constructor(ctx, env) {
    super(ctx, env);
    this.subscribers = new Set();
    this.statePromise = null;
  }

  async getAppData() {
    const state = await this.#getState();
    return state;
  }

  async submitLead(lead) {
    const name = String(lead?.name ?? "").trim();
    const email = String(lead?.email ?? "").trim();
    const phone = String(lead?.phone ?? "").trim();

    if (!name) throw new Error("Vui lòng nhập tên.");
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      throw new Error("Vui lòng nhập email hợp lệ.");
    }
    if (!phone) throw new Error("Vui lòng nhập số điện thoại.");

    const state = await this.#getState();
    const item = {
      id: crypto.randomUUID(),
      name,
      email,
      phone,
      createdAt: new Date().toISOString(),
    };

    state.leads.unshift(item);
    await this.ctx.storage.put(STORAGE_KEY, state);
    await this.#notifySubscribers(state);
    return item;
  }

  async subscribe(callback) {
    const cb = callback.dup();
    this.subscribers.add(cb);
    cb.onRpcBroken(() => {
      this.subscribers.delete(cb);
    });
    cb.update(await this.#getState());
    return true;
  }

  async #getState() {
    if (!this.statePromise) {
      this.statePromise = (async () => {
        const stored = await this.ctx.storage.get(STORAGE_KEY);
        if (stored) return stored;

        const offerEndsAt = new Date(Date.now() + DEFAULT_OFFER_DURATION_MS).toISOString();
        const initial = {
          offerEndsAt,
          leads: [],
        };
        await this.ctx.storage.put(STORAGE_KEY, initial);
        return initial;
      })();
    }
    return await this.statePromise;
  }

  async #notifySubscribers(state) {
    for (const subscriber of [...this.subscribers]) {
      try {
        await subscriber.update(state);
      } catch {
        this.subscribers.delete(subscriber);
      }
    }
  }
}
