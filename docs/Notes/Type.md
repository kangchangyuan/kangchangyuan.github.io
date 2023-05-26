# 类型体操基础

### keyof
```ts
type MyType = typeof {name:string;id:666}
// MyType = 'name' | 'id'
```