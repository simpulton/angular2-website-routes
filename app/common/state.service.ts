import {Injectable} from 'angular2/core';

@Injectable()
export class StateService {
	private message = 'Hello Message';

    getMessage(): string {
        return this.message;
    };

    setMessage(m: string): void {
        this.message = m;
    };
}
