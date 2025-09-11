# Custom Footer Component

Đây là một Footer component tùy chỉnh được tạo ra để thay thế `FooterSlot` của edX, cung cấp footer đầy đủ thông tin về Đại học Duy Tân.

## Tính năng

### ✨ Tính năng chính

- **Responsive Design**: Tự động thích ứng trên mọi kích thước màn hình
- **University Branding**: Hiển thị logo các đơn vị của Đại học Duy Tân
- **Navigation Links**: Các liên kết quan trọng của website
- **Contact Information**: Thông tin liên hệ chi tiết
- **Accessibility**: Hỗ trợ đầy đủ các tiêu chuẩn accessibility (WCAG)
- **SEO Friendly**: Structured data và semantic HTML

### 🎨 UI/UX Features

- Clean và professional design
- Hover effects cho links
- Responsive grid layout
- High contrast mode support
- Print-friendly styles

## Cách sử dụng

### 1. Import component

```jsx
import CustomFooter from "components/CustomFooter";
```

### 2. Sử dụng cơ bản

```jsx
<CustomFooter />
```

### 3. Sử dụng với custom props

```jsx
<CustomFooter links={customLinks} contactInfo={customContactInfo} />
```

## Props

### links (array) - Optional

Custom navigation links

```jsx
const customLinks = [
  { href: "/about", text: "About Us" },
  { href: "/courses", text: "Courses" },
  { href: "/contact", text: "Contact", external: true },
];
```

### contactInfo (object) - Optional

Custom contact information

```jsx
const customContactInfo = {
  address: "254 Nguyễn Văn Linh, P. Thanh Khê, Tp. Đà Nẵng, Việt Nam",
  phone: "(+84) 236.3650403",
  phoneHref: "tel:+842363650403",
  website: "tuyensinh.duytan.edu.vn",
  websiteHref: "http://tuyensinh.duytan.edu.vn",
};
```

## Cấu trúc

### University Branding Section

- **Logo Đại học Duy Tân**: Link đến website chính
- **Logo SCS**: Link đến School of Computer Science
- **Logo CVS**: Link đến Center for Vocational Studies
- **Mô tả**: Giới thiệu về nền tảng Universe

### Navigation Links Section

- Danh sách các liên kết quan trọng
- Support both internal và external links
- Responsive layout

### Contact Information Section

- Địa chỉ trụ sở
- Số điện thoại (có thể click để gọi)
- Website tuyển sinh (link external)

### Footer Bottom

- Copyright notice với năm tự động

## Responsive Behavior

### Desktop (>1024px)

- 3 cột: University Info | Links | Contact
- Logos hiển thị ngang

### Tablet (768px - 1024px)

- 2 cột: University Info trên hàng đầu, Links + Contact dưới
- Logos vẫn hiển thị ngang

### Mobile (<768px)

- 1 cột: Tất cả sections xếp dọc
- Logos xếp dọc, center-aligned
- Text center-aligned cho đẹp hơn

## Styling

Component sử dụng SCSS với BEM methodology:

```scss
.custom-footer {
  // Main footer styles

  &__content {
    // Content wrapper
  }

  &__grid {
    // Grid layout
  }

  &__university-info {
    // University branding section
  }

  &__links {
    // Navigation links section
  }

  &__contact-info {
    // Contact information section
  }

  &__bottom {
    // Copyright section
  }
}
```

### CSS Custom Properties

```scss
:root {
  --footer-bg: #f8f9fa;
  --footer-text: #666;
  --footer-link-hover: #0073e6;
  --footer-border: #e5e5e5;
}
```

## Accessibility Features

- **ARIA Labels**: Đầy đủ aria-label cho links
- **Semantic HTML**: Sử dụng đúng semantic elements
- **Keyboard Navigation**: Tất cả links có thể tab được
- **Focus States**: Rõ ràng và dễ nhìn
- **Screen Reader**: Tương thích với screen readers
- **Color Contrast**: Đáp ứng tiêu chuẩn WCAG AA

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- IE11+ (với polyfills)

## Migration từ FooterSlot

Để migrate từ FooterSlot sang CustomFooter:

1. **Thay thế import**:

   ```jsx
   // Cũ
   import { FooterSlot } from "@edx/frontend-component-footer";

   // Mới
   import CustomFooter from "components/CustomFooter";
   ```

2. **Thay thế component**:

   ```jsx
   // Cũ
   <FooterSlot />

   // Mới
   <CustomFooter />
   ```

3. **Xóa dependency**: Có thể xóa `@edx/frontend-component-footer` khỏi package.json nếu không sử dụng ở đâu khác

## Customization

### Logo URLs

Để thay đổi logo, cập nhật src paths trong component:

```jsx
// Trong component
<img src="/static/indigo/images/logo.png" alt="Duy Tan University" />
```

### Colors

Override CSS variables:

```scss
.custom-footer {
  --footer-bg: #ffffff;
  --footer-text: #333333;
  --footer-link-hover: #ff6b35;
}
```

### Links

Pass custom links array:

```jsx
const customLinks = [
  { href: "/new-page", text: "New Page" },
  { href: "https://external.com", text: "External", external: true },
];

<CustomFooter links={customLinks} />;
```

## Performance

- **Optimized Images**: Logos được optimize cho web
- **Minimal Dependencies**: Chỉ sử dụng React và PropTypes
- **CSS Grid**: Hiệu suất cao cho layout
- **Tree Shaking**: Chỉ import những gì cần thiết

## SEO Benefits

- **Structured Data**: Semantic HTML structure
- **Internal Linking**: Các liên kết nội bộ tốt cho SEO
- **Contact Info**: Schema markup friendly
- **Footer Links**: Distribute page authority

## Troubleshooting

### Images không hiển thị

- Kiểm tra paths đến images trong `/static/indigo/images/`
- Đảm bảo images tồn tại và có quyền truy cập

### Layout bị vỡ trên mobile

- Kiểm tra CSS grid breakpoints
- Verify responsive styles được load

### Links không hoạt động

- Kiểm tra href values
- Verify external links có `target="_blank"`

## Contributing

Khi có bug hoặc feature request, vui lòng tạo issue với:

- Mô tả chi tiết
- Steps to reproduce
- Expected vs actual behavior
- Screenshots (nếu có)
