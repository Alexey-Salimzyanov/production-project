import webpack from 'webpack';
import path from 'path';
import { BuildPaths } from '../build/types/config';
import { buildCssLoader } from '../build/loaders/buildCssLoaders';

export default ({ config }: {config: webpack.Configuration}) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };
    config.resolve?.modules?.push(paths.src);
    config.resolve?.extensions?.push('.ts', '.tsx');

    if (config.module?.rules) {
        // eslint-disable-next-line
        config.module.rules = (config.module.rules as webpack.RuleSetRule[]).filter((rule: webpack.RuleSetRule) => !(rule.test instanceof RegExp && /svg/.test(rule.test.source)));
    }

    config.module?.rules?.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });
    config.module?.rules?.push(buildCssLoader(true));
    config.plugins?.push(new webpack.ProvidePlugin({
        React: 'react',
    }));

    return config;
};
