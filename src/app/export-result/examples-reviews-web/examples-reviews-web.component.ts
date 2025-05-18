import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { SegmentedButtonComponent } from "src/app/export-result/segmented-button/segmented-button.component"

@Component({
  selector: "app-examples-reviews-web",
  templateUrl: "./examples-reviews-web.component.html",
  styleUrls: ["./examples-reviews-web.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
  
export class ExamplesReviewsWebComponent {

  ExamplesReviewsWebComponent() {
    this.setInfiniteScroll();
  }

  public onViewChanged(viewType: 'list' | 'grid') {
    console.log('Changed view to:', viewType);
    // Здесь добавьте логику изменения отображения
    // Например:
    // this.isListView = viewType === 'list';
    // this.updateView();
  }

  private setInfiniteScroll() {
    const list = document.querySelector('.list_1001-2683');
    if (list) {
      list.addEventListener('scroll', () => {
        if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
          list.scrollTop = 0;
        }
      });
    }
  }
}
