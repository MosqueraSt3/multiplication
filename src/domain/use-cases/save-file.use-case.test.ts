import fs from 'fs'
import { SaveFile } from './save-file.use-case'

describe('SaveFileUseCase', () => {

    const customOptions = {
        fileContent: 'Test content',
        fileDestination: 'testOutput',
        fileName: 'testTable'
    };
    const filePath = `${customOptions.fileDestination}/${customOptions.fileName}.txt`;

    afterEach(() => {
        const outputFolderExists = fs.existsSync('outputs');
        if (outputFolderExists) fs.rmSync('outputs', { recursive: true });

        const customOutputFolderExists = fs.existsSync(customOptions.fileDestination);
        if (customOutputFolderExists) fs.rmSync(customOptions.fileDestination, { recursive: true });
    })

    test('Should save file with default values', () => {
        const saveFile = new SaveFile()
        const options = {
            fileContent: 'Test content'
        }
        const filePath = 'outputs/table.txt'
        const file = saveFile.execute(options)

        const isFileExist = fs.existsSync(filePath)
        const fileContent = fs.readFileSync(filePath, { encoding: 'utf-8' })

        expect(saveFile).toBeInstanceOf(SaveFile)
        expect(file).toBe(true)
        expect(isFileExist).toBe(true)
        expect(fileContent).toBe(options.fileContent)
    })

    test('Should save file with custom values', () => {
        const saveFile = new SaveFile()
         const file = saveFile.execute(customOptions)

        const isFileExist = fs.existsSync(filePath)
        const fileContent = fs.readFileSync(filePath, { encoding: 'utf-8' })

        expect(file).toBe(true)
        expect(isFileExist).toBe(true)
        expect(fileContent).toBe(customOptions.fileContent)
    })
})