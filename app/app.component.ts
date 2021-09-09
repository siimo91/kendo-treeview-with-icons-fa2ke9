import { Component } from '@angular/core';

const is = (fileName: string, ext: string) =>
  new RegExp(`.${ext}\$`).test(fileName);

@Component({
  selector: 'my-app',
  template: `
    <kendo-treeview
      [nodes]="data"
      textField="text"
      kendoTreeViewExpandable
      kendoTreeViewHierarchyBinding
      childrenField="items"
    >
      <ng-template kendoTreeViewNodeTemplate let-dataItem>
        <span class="k-icon {{ dataItem.icon }}"></span>
        {{ dataItem.text }}
      </ng-template>
    </kendo-treeview>
  `
})
export class AppComponent {
  public data: any[] = [
    {
      text: 'Nature dappelant',
      icon: 'k-i-globe-outline',
      items: [
        {
          text: 'fixe français',
          icon: 'k-i-folder',
          items: [
            {
              text: 'Origine Géographique',
              icon: 'k-i-globe-outline',
              items: [
                {
                  text: 'Nord; Planning',
                  icon: 'k-i-globe',
                  items: [{ text: 'Hors planning', icon: 'k-i-globe' }]
                },
                {
                    text: 'Sud de la Fra...; Direct',
                    icon: 'k-i-globe'
                  },
                  {
                    text: 'Hors secteurs crées',
                    icon: 'k-i-globe'
                  }
              ]
            }
          ]
        },
        {
          text: 'mobile francais',
          icon: 'k-i-folder',
          items: [
            { text: 'Planning', icon: 'k-i-folder' },
           
          ]
        },
        {
            text: 'Autres Natures dappelant',
            icon: 'k-i-folder',

          }
      ]
    }
  ];
}
