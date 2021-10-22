import { Observable } from  './observable';
import './map';

let o: Observable<number> = {} as any;
o.map(x => x.toFixed());