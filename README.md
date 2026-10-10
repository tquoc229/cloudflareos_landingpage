# Cloudflare OS Landing Page: Khóa Học AI Cho Doanh Nghiệp

Ứng dụng Landing Page thu thập thông tin khách hàng (Lead Generation) được sinh ra từ **Cloudflare OS Gadget**.

## ✨ Tính năng
- **Hero Section:** Tiêu đề ấn tượng, kêu gọi hành động (CTA), đồng hồ đếm ngược ưu đãi (Countdown Timer).
- **Form đăng ký:** Thu thập thông tin học viên (Họ tên, Email, Số điện thoại) kèm validation.
- **Bảng học phí:** Các gói đào tạo doanh nghiệp và cam kết chất lượng.
- **Backend Serverless:** Chạy trên Cloudflare Workers & Durable Objects với lưu trữ SQLite cho danh sách lead.

## 🚀 Cách chạy và Deploy

### 1. Cài đặt Wrangler
```bash
npm install -g wrangler
```

### 2. Chạy thử nghiệm cục bộ (Local Dev)
```bash
wrangler dev
```

### 3. Deploy lên Cloudflare toàn cầu
```bash
wrangler deploy
```

---
Được xuất bản từ Cloudflare OS Workspace: `Landing Page Khóa Học AI`.
