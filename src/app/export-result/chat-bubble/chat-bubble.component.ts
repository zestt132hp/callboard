import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
@Component({
  selector: "app-chat-bubble",
  templateUrl: "./chat-bubble.component.html",
  styleUrls: ["./chat-bubble.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatBubbleComponent {}
