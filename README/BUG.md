# BUG or feature

> Я зробив звичайний метод, але він чомусь закривав мою вкладку
> Це відбувалось тому що випадково залишся метод close() - Який судячи з усього може закривати вкладку

```tsx
const handleConfirm = () => {
  const rnd = Math.floor(Math.random() * 100);
  dispatch(onRandom(rnd));
  close();
};
```
