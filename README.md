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
  const [createdTheme, setCreatedTheme] = useState(darkTheme);
  return (
    <ThemeProvider theme={createdTheme}>
      {/* it is not working without CssBaseline */}
      <CssBaseline />
      <Button
        onClick={() =>
          setCreatedTheme(createdTheme === darkTheme ? lightTheme : darkTheme)
        }
        variant="contained"
      >
        Toggle Theme
      </Button>
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
