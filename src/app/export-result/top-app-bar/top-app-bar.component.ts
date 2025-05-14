import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
@Component({
  selector: "app-top-app-bar",
  templateUrl: "./top-app-bar.component.html",
  styleUrls: ["./top-app-bar.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopAppBarComponent {
  @Input() headline: string = "Title";
  @Input() show1stTrailingIcon: boolean = false;
  @Input() show3rdTrailingIcon: boolean = false;
  @Input() show2ndTrailingIcon: boolean = false;
  @Input() configuration: "Small centered" | "Small" | "Medium" | "Large" =
    "Small centered";
  @Input() elevation: "flat" | "on-scroll" = "flat";
}
