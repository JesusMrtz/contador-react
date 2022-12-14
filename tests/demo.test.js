describe('Primera prueba con Jest', () => {
    test('Esta prueba no debe de fallar', () => {
        /**
         * La parte de las pruebas tienen 3 partes principales:
         * 1. Inicialización 
         * 2. Estímulo (Aplicación al sujeto de pruebas)
         * 3. Aserciones (Observar el comportamiento si es el esperado)
         */
    
    
        // 1. Inicialización
        const message1 = 'Hola mundo';
    
        // 2. Estímulo
        const message2 = message1.trim();
    
        // 3. Aserciones
        expect(message1).toBe(message2);
    });
});