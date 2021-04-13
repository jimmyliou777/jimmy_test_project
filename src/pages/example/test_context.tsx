import React, { useContext } from 'react';
const themes = {
    light: {
        frontend: '#000000',
        backend: '#eeeeee',
    },
    dark: {
        frontend: '#ffffff',
        backend: '#222222',
    },
};

const ThemeContext = React.createContext(themes.light);
console.log('ThemeContext:', ThemeContext);

const App = (): JSX.Element => {
    return (
        <ThemeContext.Provider value={themes.dark}>
            <Toolbar />
        </ThemeContext.Provider>
    );
};

const Toolbar = () => {
    return (
        <div>
            <ThemedButton />
        </div>
    );
};

const ThemedButton = () => {
    const theme = useContext(ThemeContext);
    console.log('theme:', theme);
    return <button style={{ background: theme.backend, color: theme.frontend }}>I am styled by theme context!</button>;
};

export default App;
