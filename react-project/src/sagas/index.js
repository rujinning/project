import app from './app';
export default function* root() {
    yield [
        app()
    ];
}