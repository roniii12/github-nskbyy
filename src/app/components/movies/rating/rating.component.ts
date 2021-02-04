import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-rating",
  templateUrl: "./rating.component.html",
  styleUrls: ["./rating.component.css"]
})
export class RatingComponent implements OnInit {
  constructor() {}

  @Input() lengthOfStars: number = 5;
  arrayOfNumber = new Array(this.lengthOfStars);
  @Input() starColor: number = 3;
  fullStar: number = Math.floor(this.starColor);
  halfStar = (this.starColor - this.fullStar) * 100;
  @Input() canSelectStars: boolean = true;
  @Input() colorOfStars: string = "red";

  ngOnInit(): void {
    // for (let i = 1; i <= this.lengthOfStars; i++) {
    //   this.arrayOfNumber.push(i);
    // }
    for (let i of this.arrayOfNumber) console.log(i);
  }
  hoverOnStar(index: number, which: string) {
    if (this.canSelectStars) {
      if (which === "first") {
        this.fullStar = index;
        this.halfStar = 50;
      } else {
        this.fullStar = index + 1;
        this.halfStar = 0;
      }
      this.colorOfStars = "gold";
    }
  }
}
