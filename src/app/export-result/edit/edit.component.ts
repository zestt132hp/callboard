import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditComponent {}
