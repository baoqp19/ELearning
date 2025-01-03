# Common

- Metadata là những thông tin của trang web, thường là để tối ưu cho việc SEO
- title: Tiêu đề của trang web
- description: Mô tả của trang web

# Next/font

- Google fonts
- Font weight
- Subset
- Variables
- Multiple fonts
- Local fonts
- Tailwind fonts
- Import: import { Manrope, Roboto } from "next/font/google"
- Khai báo: const manrope = Manrope({ subsets: ["latin"] })
- weight: font weight của chữ điền vào là chuỗi weight: "400" hoặc là mảng weight: ["400","500"]
- subsets: kiểu chữ, thông thường là latin
- variable: tên biến để sử dụng trong CSS, ví dụ: variable: "--font-manrope"
- Sử dụng trong css: body{font-family: var(--font-manrope)}

# Next/Link

- Link
- href: đường dẫn, có thể truyền vào là chuỗi hoặc object

```js
<Link
href={{
  pathname: url,
  query: { slug: "bai-1-tong-quan-ve-khoa-hoc" },
}}
></Link>
>
```

- replace: thay thế đường dẫn và không lưu lại trong lịch sử
- scroll: mặc dịnh là `true` nghĩa là khi nhấn vào link thì sẽ scroll lên trên cùng, nếu không muốn scroll thì thiết lập `scroll={false}`
- prefetch:

# Routing
- Basic:Thư mục có file page.tsx -> sign-in: page.tsx. Sẽ tạo ra đường dẫn của webapp là /sign-in
- Lưu ý trong thư mục phải có file `page.tsx`
- Segment dynamic: [name] -> [course]: Mục đích là để lấy các params ra để xử lý một công việc gì đó ví dụ như lấy bài học từ khóa học thì mình sẽ có cấu trúc: [course]/lesson/page.tsx
```js
[course]/lesson/page.tsx
vscode-master/lesson?slug=bai-1-tong-dsfsdf
```
- Nested routes
```js
  /hello/world/page.tsx
  /hello/world
  - hello là segment 1
  - world là segment 2
```
- Group: Nó sẽ không tạo ra routing, ví dụ `(dashboard)` sẽ không tạo ra /dashboard. Nếu truy cập vào thì sẽ hiển thị not-found. Mục đích sử dụng là để gom các routing liên quan vào chung
- Ví dụ có đường dẫn là /shop, shop/a, shop/b, shop/a/b thì _Catch all segments_ sẽ chấp nhận shop/a, shop/b, shop/a/b, còn nếu vào /shop thì sẽ not-found
- Ví dụ có đường dẫn là /shop, shop/a, shop/b, shop/a/b thì _Optional Catch all segments_ sẽ chấp nhận tất cả bao gồm /shop, shop/a, shop/b, shop/a/b
- Catch-all Segments: sign-in/[...sign-in]
- Optional Catch-all Segments: sign-in/[[...sign-in]]
- Parallel Routes
- Intercepting Routes
# Params
- Params
- SearchParams
# Layout
