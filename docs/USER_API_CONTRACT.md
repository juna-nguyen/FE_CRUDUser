# User Management API Contract

Tài liệu này mô tả các route hiện có trong FE và hợp đồng API đề xuất để FE kết nối backend.

## Phạm vi

- FE hiện tại là một dashboard quản lý user.
- Dữ liệu đang hard-code trong `src/data/users.js`.
- API bên dưới là spec đề xuất, bám theo đúng field và màn hình hiện có trong dự án.

## FE Routes

| FE Route | Màn hình | API liên quan |
| --- | --- | --- |
| `/` | Danh sách người dùng | `GET /users` |
| `/users/:id` | Chi tiết người dùng | `GET /users/:id` |
| `/users/new` | Tạo user mới | `POST /users` |
| `/users/:id/edit` | Sửa user | `GET /users/:id`, `PATCH /users/:id` |
| `/users/:id/delete` | Xác nhận xoá user | `DELETE /users/:id` |

## Data Model

### User

```json
{
  "id": "USR-001",
  "name": "Sarah Jenkins",
  "email": "sarah.j@example.com",
  "age": 28,
  "role": "Administrator",
  "department": "Engineering",
  "location": "San Francisco, CA",
  "status": "Active",
  "initials": "SJ",
  "accent": "from-slate-700 to-slate-500",
  "createdAt": "Oct 12, 2023"
}
```

### User Detail Fields

Một số màn chi tiết đang dùng thêm field tổng hợp:

```json
{
  "avatarLabel": "Administrator",
  "systemId": "USR-001-SYS",
  "createdAtDetail": "Oct 12, 2023, 08:14 AM",
  "updatedAt": "2 hours ago"
}
```

## Common Response Format

### Success

```json
{
  "success": true,
  "data": {}
}
```

### Error

```json
{
  "success": false,
  "message": "Validation failed",
  "errors": {
    "email": "Email is already taken."
  }
}
```

## API Endpoints

### 1. Get users

`GET /users`

Query params:

- `page` number, default `1`
- `limit` number, default `10`
- `search` string, tìm theo tên hoặc email
- `sortBy` string, ví dụ `createdAt`, `name`, `age`
- `sortOrder` string, `asc` hoặc `desc`

Response:

```json
{
  "success": true,
  "data": {
    "items": [
      {
        "id": "USR-001",
        "name": "Sarah Jenkins",
        "email": "sarah.j@example.com",
        "age": 28,
        "role": "Administrator",
        "department": "Engineering",
        "location": "San Francisco, CA",
        "status": "Active",
        "initials": "SJ",
        "accent": "from-slate-700 to-slate-500",
        "createdAt": "Oct 12, 2023"
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 10,
      "totalItems": 5,
      "totalPages": 1
    }
  }
}
```

### 2. Get user detail

`GET /users/:id`

Path params:

- `id` string, ví dụ `USR-001`

Response:

```json
{
  "success": true,
  "data": {
    "id": "USR-001",
    "name": "Sarah Jenkins",
    "email": "sarah.j@example.com",
    "age": 28,
    "role": "Administrator",
    "department": "Engineering",
    "location": "San Francisco, CA",
    "status": "Active",
    "initials": "SJ",
    "accent": "from-slate-700 to-slate-500",
    "createdAt": "Oct 12, 2023",
    "avatarLabel": "Administrator",
    "systemId": "USR-001-SYS",
    "createdAtDetail": "Oct 12, 2023, 08:14 AM",
    "updatedAt": "2 hours ago"
  }
}
```

### 3. Create user

`POST /users`

Request body:

```json
{
  "name": "Alex Johnson",
  "email": "alex@example.com",
  "age": 18,
  "role": "Viewer",
  "department": "Product",
  "location": "Ho Chi Minh City",
  "status": "Active"
}
```

Notes:

- `id`, `initials`, `accent`, `createdAt`, `systemId`, `createdAtDetail`, `updatedAt` nên do backend tự sinh.
- FE form hiện tại đang mô phỏng `Full Name`, `Email Address`, `Age`.
- `role` mặc định có thể là `Viewer` nếu backend muốn giữ đúng logic hiện tại.

Response:

```json
{
  "success": true,
  "data": {
    "id": "USR-006",
    "name": "Alex Johnson",
    "email": "alex@example.com",
    "age": 18,
    "role": "Viewer",
    "department": "Product",
    "location": "Ho Chi Minh City",
    "status": "Active",
    "initials": "AJ",
    "accent": "from-slate-700 to-slate-500",
    "createdAt": "Aug 15, 2026"
  }
}
```

### 4. Update user

`PATCH /users/:id`

Path params:

- `id` string, ví dụ `USR-001`

Request body:

```json
{
  "name": "Sarah Jenkins",
  "email": "sarah.j@example.com",
  "age": 29,
  "role": "Administrator",
  "department": "Engineering",
  "location": "San Francisco, CA",
  "status": "Active"
}
```

Response:

```json
{
  "success": true,
  "data": {
    "id": "USR-001",
    "name": "Sarah Jenkins",
    "email": "sarah.j@example.com",
    "age": 29,
    "role": "Administrator",
    "department": "Engineering",
    "location": "San Francisco, CA",
    "status": "Active",
    "initials": "SJ",
    "accent": "from-slate-700 to-slate-500",
    "createdAt": "Oct 12, 2023",
    "updatedAt": "2026-08-15T10:14:00Z"
  }
}
```

### 5. Delete user

`DELETE /users/:id`

Path params:

- `id` string, ví dụ `USR-001`

Request body:

- Không bắt buộc

Response:

```json
{
  "success": true,
  "data": {
    "id": "USR-001",
    "deleted": true
  }
}
```

## Validation Rules

- `name`: required, tối thiểu 2 ký tự
- `email`: required, đúng định dạng email, unique
- `age`: required, số nguyên từ `1` đến `120`
- `role`: optional hoặc required tùy backend, khuyến nghị mặc định `Viewer`
- `department`: optional
- `location`: optional
- `status`: optional, giá trị khuyến nghị: `Active`, `Pending`, `Offline`

## Error Codes

| HTTP | Khi nào dùng | Ví dụ message |
| --- | --- | --- |
| `400` | Payload không hợp lệ | `Validation failed` |
| `401` | Chưa đăng nhập / token sai | `Unauthorized` |
| `403` | Không có quyền | `Forbidden` |
| `404` | Không tìm thấy user | `User not found` |
| `409` | Trùng email hoặc dữ liệu xung đột | `Email already exists` |
| `500` | Lỗi hệ thống | `Internal server error` |

## FE Mapping

- Danh sách user ở [`src/components/users/UserTable.jsx`](../src/components/users/UserTable.jsx) sẽ gọi `GET /users`.
- Nút bút chì ở [`src/components/users/UserTableRow.jsx`](../src/components/users/UserTableRow.jsx) sẽ đi tới `GET /users/:id` để load detail.
- Form tạo mới ở [`src/components/users/UserFormCard.jsx`](../src/components/users/UserFormCard.jsx) sẽ gọi `POST /users`.
- Modal xoá ở [`src/components/users/DeleteUserModal.jsx`](../src/components/users/DeleteUserModal.jsx) sẽ gọi `DELETE /users/:id`.
- Màn chi tiết ở [`src/pages/UserDetailPage.jsx`](../src/pages/UserDetailPage.jsx) sẽ hiển thị data từ `GET /users/:id`.

## Ghi chú triển khai

- FE hiện tại chưa dùng `react-router-dom`, nên route có thể được gắn bằng router thật ở bước tích hợp API tiếp theo.
- Nếu backend muốn chuẩn hoá khác, nên giữ nguyên tối thiểu các field đang dùng trong FE: `id`, `name`, `email`, `age`, `role`, `department`, `location`, `status`, `initials`, `accent`, `createdAt`.
- Nếu muốn hỗ trợ pagination và search, response list nên có `pagination` như mẫu ở trên.
