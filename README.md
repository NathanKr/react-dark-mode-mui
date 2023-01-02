<h2>Motivation</h2>
Use dark mode in mui

<h2>Setup</h2>

<h3>Install</h3>

```
npm i
```

remark : mui requires the following modules : @mui/material @emotion/react @emotion/styled @mui/icons-material

<h3>Run</h3>

```
npm run dev
```

<h2>ThemeProvider</h2>
The theme is handled via ThemeProvider which is imported from @mui/material/styles

```typescript
function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      {/* it is not working without CssBaseline */}
      <CssBaseline />
      <p>This app is using the dark mode hard code via darkTheme </p>
      <p>you can replace to light mode in code via lightTheme</p>
    </ThemeProvider>
  );
}
```

<h2>darkTheme \ lightTheme</h2>

```typescript
export const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});
```

<h2>Reference</h2>
<a href='https://mui.com/material-ui/customization/dark-mode/'>official docs</a>
