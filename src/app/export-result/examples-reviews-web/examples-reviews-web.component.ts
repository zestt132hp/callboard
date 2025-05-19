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

  carouselImages = [
    'https://pibig.info/uploads/posts/2022-11/1668902380_1-pibig-info-p-derevyannie-polki-na-stenu-vkontakte-1.jpg',
    'https://cs1.livemaster.ru/storage/5c/4a/86f454c528300327febbbfdcd31v--dlya-doma-i-interera-polka-so-skrytym-krepleniem-iz-dereva-du.jpg',
    'https://1poderevu.ru/wp-content/uploads/2014/10/polka.jpg'
  ];

  products = [
    {
      images: ['thumb1.jpg', 'thumb2.jpg'],
      title: 'Продам стол',
      category: 'Мебель • 1 руб. • 1.2 км',
      description: 'Самый прочный и простой стол'
    },
    {
      images: ['thumb1.jpg', 'thumb2.jpg'],
      title: 'Продам стул',
      category: 'Мебель • 1 руб. • 1.2 км',
      description: 'Самый прочный и простой стул'
    },
    {
      images: ['thumb1.jpg', 'thumb2.jpg'],
      title: 'Продам тумбу',
      category: 'Мебель • 1 руб. • 1.2 км',
      description: 'Самую прочную и простую стул'
    }];

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
