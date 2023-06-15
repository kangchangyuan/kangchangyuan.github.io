# SQL 内置函数

数据表

| id  | class | name | age | score |
| :-: | :---: | :--: | :-: | :---: |
|  1  | 一班  | 张三 |  8  |  60   |
|  2  | 二班  | 李四 | 10  |  70   |
|  3  | 一班  | 王五 | 12  |  80   |
|  4  | 三班  | 赵六 |  9  |  90   |

### 聚合函数

- avg
- count
- sum
- min
- max

```sql
select count(*) as '总人数', sum(score) as '总分', max(score) as '最高分',
  avg(score) as '平均分', min(score) as '最低分' from tableName;
```

::: details 查询结果
| 总人数 | 总分 | 最高分 | 平均分 | 最低分 |
| :---: | :---: | :---: | :---: | :---: |
| 4 | 300 | 90 | 75 |60 |
:::

### 字符串函数

- concat
- substr **和编程语言不同下标从 1 开始** [start,length]
- length 当前字段的字节长度
- upper 可以无中生有在数据库没有的字段
- lower 可以无中生有 大小写转换只针对英文

```sql
select concat('xx',name,'yy'),substr(name,2,1),length(name),upper('aa'),
lower(name) from tableName where id = 1;
```

::: details 查询结果
| concat('xx',name,'yy') | substr(name,2,1) | length(name) | upper('aa') | lower(name) |
| :---: | :---: | :---: | :---: | :---: |
| xx 张三 yy | 三 | 6 | AA | 张三 |
:::

### 数值函数

- round 四舍五入
- ceil 向上取整
- floor 向下取整
- abs 绝对值
- mod 取模 mod(5,2) => 1

```sql
select round(1.234),ceil(2.4),floor(3.8),abs(-1.2458),mod(6,4);
```

::: details 查询结果
| round(1.234) | ceil(2.4) | floor(3.8) | abs(-1.2458) | mod(6,4) |
| :---: | :---: | :---: | :---: | :---: |
| 1.23| 3 | 3 | 1.2458 | 2 |
:::

### 日期函数

- year
- month
- day
- date
- time

```sql
-- eg: create_at = 2022-06-15 15:50:18
select year(create_at),month(create_at),day(create_at),date(create_at),time(create_at);
```

::: details 查询结果
| year | month | day | date | time |
| :---: | :---: | :---: | :---: | :---: |
| 2022| 6 | 1 | 2022-06-15 | 15:50:18 |
:::

### 条件函数

- if

```sql
select name,score, if(score>=60,'及格','不及格') as grade from tableName;
```

单条件使用
::: details 查询结果
| name | score |grade |
| :---: | :---: |:---: |
| 张三 | 60 |及格 |
| 李四 | 70 |及格 |
| 王五 | 80 |及格 |
| 赵六 | 90 |及格 |
:::

- case

```sql
select name,score, case when score>=90 then '优秀' when score>60 then '良好' else '差' end as grade from tableName;
```

多条件使用
::: details 查询结果
| name | grade |grade |
| :---: | :---: |:---: |
| 张三 | 60 |差 |
| 李四 | 70 |良好 |
| 王五 | 80 |良好 |
| 赵六 | 90 |优秀 |
:::

### 系统函数

- version
- datebase
- user

```sql
select version(),database(),user();
```

::: details 查询结果
| version() | database() |user() |
| :---: | :---: |:---: |
| 8.0.33 | test |root@172.17.0.1 |
:::

### 类型转换函数

:::details 常用类型
| 类型| 名称 |
| :---: | :---: |
| signed |整型|
| unsigned |无符号整型|
| decimal| 浮点型|
| char |字符类型|
| date |日期类型|
| time |时间类型|
| datetime| 日期时间类型|
| binary| 二进制类型|
  :::

- convert(target,type)

```sql
select greatest(1,3,convert('123',signed));
-- '123'-> 123 所有最大值是123
```

- cast(target as type)

```sql
select greatest(1,3,cast('123' as signed));
-- '123'-> 123 所有最大值是123
```

- date_format

```sql
select date_format('2022-06-15','%Y年%m月%d日');
-- 2022年06月15日
```

- str_to_date

```sql
select str_to_date('2022-06-15','%Y-%m-%d');
-- 2022-06-15
```

### 其他函数

- nullif

```sql
select nullif(1,1),nullif(1,2);
```

如果两个值相当返回 null，不相等返回第一个值

- coalesce

```sql
select coalesce(null,null),coalesce(11,5,6);
```

返回第一个不是 null 的值，如果都是 null 返回的还是 null

- greatest

```sql
select greatest(11,2,3,'22');
```

返回最大值**需要同类型对比这里的最大值是 11** ~~而不是 22~~

- least

```sql
select least(11,2,3,1);
```

返回最小值
