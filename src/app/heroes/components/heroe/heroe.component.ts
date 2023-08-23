import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {
  public name: string = "Ironman";
  public age: number = 45;

  get capitalizedName(): string{
    return this.name.toUpperCase();
  }

    getHeroDescription(): string{
        return `${this.name} - ${this.age}`;
    }

    changeHero(): void{
      this.name = "Spiderman";
    }

    changeAge(): void{
      this.age = 25;
    }
}
