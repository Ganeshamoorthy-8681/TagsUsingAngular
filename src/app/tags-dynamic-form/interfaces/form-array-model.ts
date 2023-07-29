import { FormControl } from "@angular/forms";

export interface IkeyValueControlPair {
    key: FormControl,
    value: FormControl
}

export interface IkeyValuePair {
    key:   string | null,
    value: string|null
}