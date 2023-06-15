# SQL 基础

### 注意事项

- 所有的操作都要使用分号;结束
- 放弃本条 sql，后面不需要写; 使用\c 结束
- 对应 sql 语句的书写查询大写小写都可以
- 推荐使用 utf8mb4 适应表情符号等字符，兼容 utf8
- 3个字节代表1个中文或数字

### 数据库

```sql
-- 查看所有的数据库
show databases;
-- 使用指定的数据库
use databaseName;
-- 新增数据库 charset字符集
create database databaseName charset utf8mb4;
-- 删除数据库
drop database databaseName;
```

### 数据表

- 创建数据表

```sql
create table tableName (
  -- 表字段为id 数据类型 int 主键 primary key 自增 auto_increment
  id int primary key auto_increment,
  -- 表字段 nickName 数据类型 varchar 不允许为null 字段注释 昵称
  -- 36为字节 3个字节代表1个中文或数字 可以存12个中文/数字
  nickName varchar(36) not null comment '昵称',
  -- 表字段名 status int 类型 默认值为 0 注释 状态
  status int default 0 comment '状态',
  -- 表字段名 address varchar 类型 允许为null 注释 地址
  address varchar(120)  null  comment '地址'
  age int not null comment '年龄'
);
```

::: details 结果
| id | nickName | status | address | age |
| :---: | :---: | :---: | :---: | :---: |
:::

- 删除数据表

```sql
drop table tableName;
-- 使用 if exists 可以防止数据表不存在而报错
drop table if exists tableName;
```

- 复制数据表

```sql
-- 创建一个新表，表结构和旧表是一样的
create table newTable like oldTable;
-- 同时复制表结构和表数据
create table newTable select * from oldTable;
```

### 数据查询

```sql
-- 查出表中的所有字段
select * from tableName;
-- 查出表中的指定字段并重新命名
select nickname as cname,stauts as '状态' from tableName;
-- 按条件查询
select * from tableName where status = 0 and nickName = '小米';
-- in
select * tableName where status in (1,2);
select * tableName where status = 1 and status = 2;
-- not in
select * tableName where status not in (1,2);
-- between a and b 数学上的 [1,10]
select * tableName where status between 1 and 3;
-- limit (start,end] 限制查询返回的条数  limit 0,5 重0 开始 返回 5 条
select * tableName limit 0,5;
```

### 数据插入

```sql
-- 单条数据插入
insert into tableName set nickName = '昵称小胖',status = 1, age=60, address = '长白山';
-- 多条数据插入
insert into tableName (nickName,address,status,age) values ('小米','长白山',1,20),('小明','太行山',2,22);
```

::: details 结果
| id | nickName | status | address | age |
| :---: | :---: | :---: | :---: | :---: |
| 1 | 昵称小胖 | 1 | 长白山 |60 |
| 2 | 小米 | 1 | 长白山 |20 |
| 3 | 小明 | 2 | 太行山 |22 |
:::

### 数据更新

```sql
update tableName set nickName = '昵称大胖',status=2 where id = 1;
```

### 数据删除

```sql
delete from tableName where id = 1;
```

### 数据排序

```sql
-- asc 升序 desc 降序
select * from tableName order by age asc, status desc;
```

### 数据分组

> 分组中的\* 代表的是当前行，分组之后在查询使用 having:joy:

```sql
-- 要group by 某个字段，在select 中必须要选择这个字段
-- count(*) == count(address) 在一个分组中的数量
select address, count(*) as num from tableName group by address order by num asc;
-- 分组后查询
select address, count(*) as num from tableName group by address having num > 2;
-- 错误的sql ❌
select * from tableName group by address;
```

::: details 结果
| address | num |
| :---: | :---: |
| 长白山 | 2 |
| 太行山 | 1 |
:::

### 数据去重

```sql
select distinct address from tableName;
```

::: details 结果
| address |
| :---: |
| 长白山 |
| 太行山 |
:::
