/*
    *Function to inject custom params 
*/
const runCommand = async (args: string[]) => {
    process.argv = [...process.argv, ...args];
    const { argsv }  = await import('./args.plugins');
    return argsv;
}

describe('args.plugin.ts', () => {
    const originalArgv = process.argv;
    beforeEach(() => {
        process.argv = originalArgv;
        jest.resetModules()
    })

    test('Should return default values', async () => {
        const args = await runCommand(['-b', '3']);

        expect(args).toEqual(expect.objectContaining({
            b: 3,
            l: 10,
            s: false
        }));
    })

    test('Should return configuration with custom values', async () => {
        const args = await runCommand(['-b', '3', '-l', '20', '-s']);

        expect(args).toEqual(expect.objectContaining({
            b: 3,
            l: 20,
            s: true
        }));
    })
})