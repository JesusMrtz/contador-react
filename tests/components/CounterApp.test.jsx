import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../../src/components/CounterApp";

describe(`Pruebas en el componente <CounterApp />`, () => {
    const value = 100;

    it('Debe hacer match con el snapshot', () => {
        const { container } = render(<CounterApp value={ value }  />);
        expect(container).toMatchSnapshot();
    });


    it('Debe mostrar el valor inicial de 100', () => {
        render(<CounterApp  value={ value } />);
        expect( screen.getByRole('heading', { level: 2 }).textContent ).toContain( String(value) );
    });


    it('Incrementar el valor inicial a 102', async () => {
        render(<CounterApp value={ value } />);
        const getButton = screen.getByText('+1');

        await fireEvent.click(getButton);
        await fireEvent.click(getButton);

        expect( screen.getByText('102') ).toBeTruthy();
    });


    it('Decrementar el valor inicial a 98', async () => {
        render(<CounterApp value={ value } />);
        const getButton = screen.getByText('-1');

        await fireEvent.click(getButton);
        await fireEvent.click(getButton);

        expect( screen.getByText('98') ).toBeTruthy();
    });


    it('Regresar el valor inicial a 1000', async () => {
        render(<CounterApp value={ value } />);
        const getButton = screen.getByText('-1');
        const buttonReset = screen.getByText('Reset');

        await fireEvent.click(getButton);
        await fireEvent.click(getButton);
        await fireEvent.click(buttonReset);

        expect( screen.getByText('100') ).toBeTruthy();
    });
});