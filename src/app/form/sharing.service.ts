import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})


export class SharingService{
    private data:any;

    public setData(data:any){
        this.data = data;
    }

    public getData():any{
        return this.data;
    }
}