
declare namespace D3 {
    export interface Selectors {
        select: {
            (selector: string): Selection;
            (element: string): Selection;
        };
    }

    export interface Event {
        x: number;
        y: number;
    }

    export interface Base extends Selectors {
        event: Event;
    }
}

declare var d3: D3.Base;

