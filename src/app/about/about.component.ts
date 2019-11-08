import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  private lorem:string;
  constructor() { 
    this.lorem = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint eligendi molestiae commodi animi aut aperiam quo recusandae, est quod libero eius temporibus distinctio harum aliquid. Pariatur quisquam veritatis, at ipsam quasi tempora sint ad, facilis porro amet, aliquid doloribus. Ipsa, nulla quidem distinctio odio labore quisquam illo ipsam natus tempora dolor accusamus alias cum, excepturi culpa sed ullam? Animi, autem alias ex maxime nam sit similique saepe sint voluptatibus, quasi porro atque necessitatibus nisi pariatur veniam, commodi sequi quaerat nihil sunt ipsam et. Excepturi numquam, ipsum qui expedita architecto cumque autem velit inventore vero hic? Ipsa ipsam unde provident iste ullam, quibusdam natus quae nisi, aut, neque veniam alias! Consequatur adipisci numquam sed ipsam quos dolorem eaque, voluptate culpa voluptatum totam, non, libero repudiandae? Consequatur consectetur assumenda enim dolor ipsa deserunt debitis mollitia sapiente error dolorum quo vel nihil, tenetur in aut iusto itaque, doloremque commodi aliquam soluta fuga porro accusamus vitae laboriosam? Fuga cum delectus incidunt eaque illo reprehenderit, enim quasi voluptatibus dolorum esse est facere, dolore aut sed cupiditate sunt ullam nihil officia laborum quae rem dolor. Veniam nisi nihil quidem veritatis voluptate deleniti eum sit, doloribus repellendus, eveniet neque labore? Facere iste, consequuntur dolorum impedit aperiam doloribus."
  }
  ngOnInit() {
  }

}
