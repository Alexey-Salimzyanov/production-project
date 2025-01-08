import './styles/index.scss';
import { Suspense } from 'react';
import { classNames } from 'shared/lib/classNames/ClassNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/routers';
import { Navbar } from 'widgets/Navbar/ui/Navbar';
import { Sidebar } from 'widgets/Sidebar';

function App() {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}

export default App;
