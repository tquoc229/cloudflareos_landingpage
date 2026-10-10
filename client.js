const root = document.createElement("div");
root.className = "app";
document.body.appendChild(root);

document.body.style.margin = "0";
document.body.style.background = "#f6f7fb";
document.body.style.color = "#0f172a";
document.body.style.fontFamily = "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif";

const style = document.createElement("style");
style.textContent = `
  * { box-sizing: border-box; }
  a { color: inherit; }
  button, input { font: inherit; }
  .app {
    min-height: 100vh;
    padding: 20px;
  }
  .shell {
    max-width: 1180px;
    margin: 0 auto;
    display: grid;
    gap: 20px;
  }
  .panel {
    background: rgba(255,255,255,0.88);
    backdrop-filter: blur(16px);
    border: 1px solid rgba(148,163,184,0.18);
    border-radius: 24px;
    box-shadow: 0 24px 60px rgba(15,23,42,0.08);
  }
  .hero {
    position: relative;
    overflow: hidden;
    padding: 34px;
    display: grid;
    grid-template-columns: 1.4fr 0.9fr;
    gap: 24px;
    align-items: stretch;
    background:
      radial-gradient(circle at top right, rgba(59,130,246,0.16), transparent 36%),
      radial-gradient(circle at left bottom, rgba(14,165,233,0.12), transparent 28%),
      rgba(255,255,255,0.9);
  }
  .eyebrow {
    display: inline-flex;
    gap: 8px;
    align-items: center;
    padding: 8px 12px;
    border-radius: 999px;
    background: rgba(15,23,42,0.06);
    color: #334155;
    font-size: 14px;
    width: fit-content;
    margin-bottom: 18px;
  }
  .hero h1 {
    margin: 0;
    font-size: clamp(32px, 5vw, 58px);
    line-height: 1.02;
    letter-spacing: -0.04em;
    max-width: 12ch;
  }
  .hero p {
    margin: 18px 0 0;
    color: #475569;
    font-size: 17px;
    line-height: 1.7;
    max-width: 56ch;
  }
  .hero-actions {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    margin-top: 24px;
  }
  .cta {
    appearance: none;
    border: none;
    border-radius: 999px;
    padding: 14px 20px;
    background: linear-gradient(135deg, #0f172a, #1d4ed8);
    color: white;
    font-weight: 700;
    cursor: pointer;
    box-shadow: 0 16px 30px rgba(29,78,216,0.22);
    text-decoration: none;
  }
  .cta.secondary {
    background: white;
    color: #0f172a;
    border: 1px solid rgba(148,163,184,0.35);
    box-shadow: none;
  }
  .hero-card {
    display: grid;
    gap: 14px;
    align-content: start;
    padding: 22px;
    border-radius: 20px;
    background: linear-gradient(180deg, rgba(15,23,42,0.98), rgba(15,23,42,0.9));
    color: white;
  }
  .countdown-label {
    color: rgba(255,255,255,0.7);
    font-size: 14px;
  }
  .countdown {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
  }
  .time-box {
    background: rgba(255,255,255,0.08);
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 16px;
    padding: 14px 10px;
    text-align: center;
  }
  .time-box strong {
    display: block;
    font-size: 26px;
    line-height: 1;
  }
  .time-box span {
    display: block;
    margin-top: 6px;
    font-size: 12px;
    color: rgba(255,255,255,0.65);
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }
  .hero-note {
    color: rgba(255,255,255,0.8);
    font-size: 14px;
    line-height: 1.6;
    margin-top: auto;
  }
  .grid-2 {
    display: grid;
    grid-template-columns: 0.95fr 1.05fr;
    gap: 20px;
  }
  .section {
    padding: 26px;
  }
  .section h2 {
    margin: 0 0 10px;
    font-size: 24px;
    letter-spacing: -0.03em;
  }
  .muted {
    color: #64748b;
    line-height: 1.7;
    margin: 0;
  }
  .form {
    display: grid;
    gap: 14px;
    margin-top: 18px;
  }
  .field-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 12px;
  }
  .field {
    display: grid;
    gap: 8px;
  }
  .field label {
    font-size: 13px;
    color: #334155;
    font-weight: 600;
  }
  .field input {
    width: 100%;
    border: 1px solid rgba(148,163,184,0.28);
    background: white;
    border-radius: 14px;
    padding: 14px 16px;
    outline: none;
    transition: 0.2s ease;
  }
  .field input:focus {
    border-color: #3b82f6;
    box-shadow: 0 0 0 4px rgba(59,130,246,0.12);
  }
  .form-footer {
    display: flex;
    align-items: center;
    gap: 12px;
    flex-wrap: wrap;
  }
  .message {
    font-size: 14px;
    color: #0f766e;
  }
  .message.error { color: #b91c1c; }
  .table-wrap {
    overflow: auto;
    border-radius: 18px;
    border: 1px solid rgba(148,163,184,0.22);
    margin-top: 18px;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 620px;
    background: white;
  }
  thead th {
    text-align: left;
    padding: 14px 16px;
    font-size: 12px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #64748b;
    background: #f8fafc;
  }
  tbody td {
    padding: 14px 16px;
    border-top: 1px solid #e2e8f0;
    color: #334155;
  }
  .cards {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 14px;
    margin-top: 16px;
  }
  .price-card {
    padding: 18px;
    border-radius: 18px;
    background: #fff;
    border: 1px solid rgba(148,163,184,0.2);
  }
  .price-card.highlight {
    background: linear-gradient(180deg, #0f172a, #1e293b);
    color: white;
    border-color: transparent;
  }
  .price-card .tag {
    display: inline-flex;
    padding: 6px 10px;
    border-radius: 999px;
    background: rgba(59,130,246,0.1);
    color: #1d4ed8;
    font-size: 12px;
    font-weight: 700;
    margin-bottom: 10px;
  }
  .price-card.highlight .tag {
    background: rgba(255,255,255,0.12);
    color: white;
  }
  .price-card .price {
    font-size: 32px;
    font-weight: 800;
    margin: 6px 0 12px;
    letter-spacing: -0.04em;
  }
  .benefits {
    margin: 0;
    padding-left: 18px;
    color: inherit;
    line-height: 1.7;
  }
  .commitments {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 12px;
    margin-top: 16px;
  }
  .commitment {
    padding: 16px;
    border-radius: 16px;
    background: #f8fafc;
    border: 1px solid rgba(148,163,184,0.14);
  }
  .commitment strong {
    display: block;
    margin-bottom: 6px;
  }
  .commitment span {
    color: #64748b;
    font-size: 14px;
    line-height: 1.6;
  }
  @media (max-width: 980px) {
    .hero, .grid-2 {
      grid-template-columns: 1fr;
    }
    .field-grid, .cards, .commitments, .countdown {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (max-width: 640px) {
    .app { padding: 12px; }
    .hero, .section { padding: 18px; border-radius: 20px; }
    .field-grid, .cards, .commitments, .countdown {
      grid-template-columns: 1fr;
    }
    .hero h1 { max-width: 100%; }
    .hero-actions { flex-direction: column; align-items: stretch; }
    .cta { width: 100%; text-align: center; }
  }
`;
document.head.appendChild(style);

let appData = await gadget.getAppData();
let flash = { type: "", text: "" };

function formatNumber(value) {
  return String(value).padStart(2, "0");
}

function getCountdownParts(targetIso) {
  const diff = Math.max(0, new Date(targetIso).getTime() - Date.now());
  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return { days, hours, minutes, seconds };
}

function renderMessage() {
  if (!flash.text) return "";
  return `<div class="message ${flash.type === "error" ? "error" : ""}">${flash.text}</div>`;
}

function renderTable() {
  const rows = appData.leads
    .map(
      (lead, index) => `
        <tr>
          <td>${index + 1}</td>
          <td>${escapeHtml(lead.name)}</td>
          <td>${escapeHtml(lead.email)}</td>
          <td>${escapeHtml(lead.phone)}</td>
          <td>${new Date(lead.createdAt).toLocaleString("vi-VN")}</td>
        </tr>`
    )
    .join("");

  return rows || `<tr><td colspan="5" style="text-align:center;color:#64748b;padding:24px">Chưa có đăng ký nào.</td></tr>`;
}

function escapeHtml(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function render() {
  const countdown = getCountdownParts(appData.offerEndsAt);
  root.innerHTML = `
    <div class="shell">
      <section class="panel hero" id="hero">
        <div>
          <div class="eyebrow">AI Training for Enterprise · Ứng dụng thực chiến</div>
          <h1>Khóa học Đào tạo AI cho Doanh nghiệp</h1>
          <p>Giúp đội ngũ của bạn nắm bắt AI nhanh hơn, làm việc thông minh hơn và triển khai ngay các quy trình thực tế để tăng năng suất, giảm chi phí, và nâng chất lượng vận hành.</p>
          <div class="hero-actions">
            <a class="cta" href="#register">Đăng ký tư vấn ngay</a>
            <a class="cta secondary" href="#pricing">Xem học phí</a>
          </div>
        </div>
        <div class="hero-card">
          <div class="countdown-label">Ưu đãi kết thúc sau</div>
          <div class="countdown">
            <div class="time-box"><strong>${formatNumber(countdown.days)}</strong><span>Ngày</span></div>
            <div class="time-box"><strong>${formatNumber(countdown.hours)}</strong><span>Giờ</span></div>
            <div class="time-box"><strong>${formatNumber(countdown.minutes)}</strong><span>Phút</span></div>
            <div class="time-box"><strong>${formatNumber(countdown.seconds)}</strong><span>Giây</span></div>
          </div>
          <div class="hero-note">Đăng ký sớm để giữ mức học phí ưu đãi và nhận tư vấn lộ trình phù hợp cho doanh nghiệp.</div>
        </div>
      </section>

      <section class="grid-2">
        <div class="panel section" id="register">
          <h2>Khung Form Đăng Ký</h2>
          <p class="muted">Nhập thông tin để nhận tư vấn chương trình phù hợp. Khi bấm Gửi, dữ liệu sẽ được lưu vào danh sách bên dưới.</p>
          <form class="form" id="lead-form">
            <div class="field-grid">
              <div class="field">
                <label for="name">Tên</label>
                <input id="name" name="name" placeholder="Nguyễn Văn A" autocomplete="name" required />
              </div>
              <div class="field">
                <label for="email">Email</label>
                <input id="email" name="email" type="email" placeholder="you@company.com" autocomplete="email" required />
              </div>
              <div class="field">
                <label for="phone">Số điện thoại</label>
                <input id="phone" name="phone" type="tel" placeholder="0912 345 678" autocomplete="tel" required />
              </div>
            </div>
            <div class="form-footer">
              <button class="cta" type="submit">Gửi đăng ký</button>
              ${renderMessage()}
            </div>
          </form>

          <div class="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Tên</th>
                  <th>Email</th>
                  <th>Số điện thoại</th>
                  <th>Thời gian</th>
                </tr>
              </thead>
              <tbody id="lead-table">${renderTable()}</tbody>
            </table>
          </div>
        </div>

        <div class="panel section" id="pricing">
          <h2>Bảng học phí và cam kết chất lượng</h2>
          <p class="muted">Thiết kế gọn gàng, dễ so sánh gói học phí và các cam kết đi kèm để doanh nghiệp yên tâm ra quyết định.</p>

          <div class="cards">
            <div class="price-card">
              <div class="tag">Gói Cơ Bản</div>
              <div class="price">12.000.000đ</div>
              <ul class="benefits">
                <li>02 buổi đào tạo nền tảng</li>
                <li>Tài liệu thực hành</li>
                <li>Hỗ trợ Q&A sau lớp</li>
              </ul>
            </div>
            <div class="price-card highlight">
              <div class="tag">Phổ biến nhất</div>
              <div class="price">24.000.000đ</div>
              <ul class="benefits">
                <li>04 buổi đào tạo + workshop</li>
                <li>Case study theo ngành</li>
                <li>Tư vấn xây dựng use case nội bộ</li>
              </ul>
            </div>
            <div class="price-card">
              <div class="tag">Gói Doanh nghiệp</div>
              <div class="price">Liên hệ</div>
              <ul class="benefits">
                <li>Thiết kế theo nhu cầu riêng</li>
                <li>Onsite/online linh hoạt</li>
                <li>Đồng hành triển khai thực tế</li>
              </ul>
            </div>
          </div>

          <div class="commitments">
            <div class="commitment">
              <strong>Chất lượng thực chiến</strong>
              <span>Nội dung tập trung vào ứng dụng AI ngay trong công việc hàng ngày của doanh nghiệp.</span>
            </div>
            <div class="commitment">
              <strong>Giảng viên kinh nghiệm</strong>
              <span>Được dẫn dắt bởi chuyên gia đã triển khai AI cho nhiều mô hình vận hành khác nhau.</span>
            </div>
            <div class="commitment">
              <strong>Cam kết đồng hành</strong>
              <span>Hỗ trợ sau khóa học để đảm bảo đội ngũ áp dụng được vào công việc thực tế.</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  `;

  const form = root.querySelector("#lead-form");
  const tableBody = root.querySelector("#lead-table");

  form?.addEventListener("submit", async (event) => {
    event.preventDefault();
    flash = { type: "", text: "" };
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || "").trim(),
      email: String(data.get("email") || "").trim(),
      phone: String(data.get("phone") || "").trim(),
    };
    try {
      await gadget.submitLead(payload);
      flash = { type: "success", text: "Đăng ký thành công! Thông tin đã được lưu." };
      form.reset();
    } catch (err) {
      flash = { type: "error", text: err?.message || "Không thể gửi đăng ký." };
    }
    render();
  });

  if (tableBody) tableBody.innerHTML = renderTable();
}

class AppSubscriber extends RpcTarget {
  update(state) {
    appData = state;
    render();
  }

  [Symbol.dispose]() {
    gadget.subscribe(this);
  }
}

const subscriber = new AppSubscriber();
await gadget.subscribe(subscriber);
render();

setInterval(() => {
  const countdown = getCountdownParts(appData.offerEndsAt);
  const boxes = root.querySelectorAll(".time-box strong");
  if (boxes.length === 4) {
    boxes[0].textContent = formatNumber(countdown.days);
    boxes[1].textContent = formatNumber(countdown.hours);
    boxes[2].textContent = formatNumber(countdown.minutes);
    boxes[3].textContent = formatNumber(countdown.seconds);
  }
}, 1000);
