# Input with localStorage

- Це класичне створення localStorage
- Як бачимо треба отримувати дані за допомогою lazy initialization

```tsx
const [value, setValue] = useState<string>(() => {
  const saved = localStorage.getItem("input");
  return saved ? JSON.parse(saved) : "";
});
```

### Помилкове перше враження

- Спочатку хочеться зробити це через useEffect, але це помилка
- Так ми будемо отримувати старе значення, тобто порожню строку
- На практиці цей варіант взагалі не робочий

```tsx
const [value, setValue] = useState("");

useEffect(() => {
  const saved = localStorage.getItem("input");
  if (saved) {
    setValue(JSON.parse(saved));
  }
}, []);
```
