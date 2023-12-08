import { CreateTable } from '../domain/use-cases/create-table.use-case';
import { SaveFile } from '../domain/use-cases/save-file.use-case';
import { ServerApp } from './server-app';

describe('server-app.ts', () => {

    const options = {
        base: 7,
        limit: 10,
        showTable: false,
    }

    test('Should create ServerApp instance', () => {
        const serverApp = new ServerApp();
        
        expect(serverApp).toBeInstanceOf(ServerApp);
        expect(typeof ServerApp.run).toBe('function')
    })

    test('Should run ServerApp with options', () => {
        const logSpy = jest.spyOn(console, 'log');
        const createTableSpy = jest.spyOn(CreateTable.prototype, 'execute');
        const saveFileSpy = jest.spyOn(SaveFile.prototype, 'execute');

        expect(logSpy).toHaveBeenCalledWith('Server running...!');
        expect(logSpy).toHaveBeenCalledWith('File Created!!');

        expect(createTableSpy).toHaveBeenCalledTimes(1);
        expect(createTableSpy).toHaveBeenCalledWith({
            base: options.base,
            limit: options.limit,
        });

        expect(saveFileSpy).toHaveBeenCalledTimes(1);
        expect(saveFileSpy).toHaveBeenCalledWith({
            fileContent: expect.any(String),
        });
    })
})