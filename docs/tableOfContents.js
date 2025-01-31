/*
  The table of contents is made of list of sections that themselves
  each contain a list of pages.

  To modify pages and ordering, update the Table of Contents section
  below.
*/

import sortBy from 'lodash/sortBy';

class Section {
  constructor({
    title, // if true, sort children by title
    autoSort = false, // if true, sort children by title
    pages = [], // list of Page objects
  } = {}) {
    this.title = title;
    this.autoSort = autoSort;
    this._pages = pages;
  }

  get pages() {
    if (this.autoSort) {
      return sortBy(this._pages, ['title']);
    }
    return this._pages;
  }

  clone(newVals) {
    return new Section({
      title: newVals.title || this.title,
      autoSort: newVals.autoSort || this.autoSort,
      pages: newVals.pages || this.pages,
    });
  }
}

class Page {
  constructor({
    path, // must correspond to a component name in pages directory
    title, // used in side nav, page header, and document title
    isCode = false, // if true, format using <code> tag
    disabled = false, // placeholder - don't link
    keywords = [], // additional terms to match
  } = {}) {
    this.path = path;
    this.title = title;
    this.isCode = isCode;
    this.disabled = disabled;
    this.keywords = keywords;
  }
}

/***********************************************/
/*   Table of contents                         */
/***********************************************/

const buttonRelatedItems = ['button', 'link'];

export default [
  new Section({
    pages: [
      new Page({
        path: '/',
        title: 'Home',
      }),
      new Page({
        path: '/principles',
        title: 'Design principles',
      }),
      new Page({
        path: '/versions',
        title: 'Version history',
      }),
    ],
  }),
  new Section({
    title: 'Foundation',
    autoSort: true,
    pages: [
      new Page({
        path: '/colors',
        title: 'Colors and themes',
      }),
      new Page({
        path: '/errors',
        title: 'Errors',
      }),
      new Page({
        path: '/icons',
        title: 'Icons',
      }),
      new Page({
        path: '/inclusive',
        title: 'Inclusive design',
      }),
      new Page({
        path: '/layout',
        title: 'Layout',
      }),
      new Page({
        path: '/motion',
        title: 'Motion',
        disabled: true,
      }),
      new Page({
        path: '/typography',
        title: 'Typography',
        disabled: true,
      }),
      new Page({
        path: '/writing',
        title: 'Writing',
      }),
      new Page({
        path: '/glossary',
        title: 'Glossary',
      }),
    ],
  }),
  new Section({
    title: 'Patterns',
    autoSort: true,
    pages: [
      new Page({
        path: '/autosave',
        title: 'Auto-save',
        disabled: true,
      }),
      new Page({
        path: '/renderers',
        title: 'Content renderers',
        disabled: true,
      }),
      new Page({
        path: '/dragdrop',
        title: 'Drag and drop',
        disabled: true,
      }),
      new Page({
        path: '/filters',
        title: 'Filters',
        disabled: false,
      }),
      new Page({
        path: '/fileuploader',
        title: 'File uploaders',
        disabled: true,
      }),
      new Page({
        path: '/forms',
        title: 'Forms',
        disabled: true,
      }),
      new Page({
        path: '/pagination',
        title: 'Pagination',
        disabled: true,
      }),
      new Page({
        path: '/pageheader',
        title: 'Page headers',
        disabled: false,
      }),
      new Page({
        path: '/tables',
        title: 'Tables',
        disabled: true,
      }),
      new Page({
        path: '/time',
        title: 'Time',
        disabled: true,
      }),
      new Page({
        path: '/toolbar',
        title: 'Toolbars',
        disabled: true,
      }),
    ],
  }),
  new Section({
    title: 'Components',
    autoSort: true,
    pages: [
      new Page({
        path: '/alerts',
        title: 'Alerts',
        disabled: true,
      }),
      new Page({
        path: '/appbars',
        title: 'App bars',
      }),
      new Page({
        path: '/badges',
        title: 'Badges',
        disabled: true,
      }),
      new Page({
        path: '/banners',
        title: 'Banners',
        disabled: true,
      }),
      new Page({
        path: '/buttons',
        title: 'Buttons and links',
      }),
      new Page({
        path: '/cards',
        title: 'Cards',
        disabled: true,
      }),
      new Page({
        path: '/filters',
        title: 'Filters',
        disabled: true,
      }),
      new Page({
        path: '/loaders',
        title: 'Loaders',
      }),
      new Page({
        path: '/menus',
        title: 'Menus',
      }),
      new Page({
        path: '/modals',
        title: 'Modals',
      }),
      new Page({
        path: '/snackbars',
        title: 'Snackbars',
      }),
      new Page({
        path: '/tabs',
        title: 'Tabs',
        disabled: true,
      }),
      new Page({
        path: '/textfields',
        title: 'Text fields',
      }),
      new Page({
        path: '/tooltips',
        title: 'Tooltips',
        disabled: true,
      }),
    ],
  }),
  new Section({
    title: 'Code library docs',
    autoSort: true,
    pages: [
      new Page({
        path: '/library',
        title: 'Getting started',
      }),
    ],
  }),
  new Section({
    title: 'Code library utilities',
    autoSort: true,
    pages: [
      new Page({
        path: '/kthemeplugin',
        title: 'KThemePlugin',
        isCode: true,
        disabled: true,
      }),
      new Page({
        path: '/kresponsivewindowmixin',
        title: 'KResponsiveWindowMixin',
        isCode: true,
        disabled: true,
      }),
      new Page({
        path: '/kresponsiveelementmixin',
        title: 'KResponsiveElementMixin',
        isCode: true,
        disabled: true,
      }),
    ],
  }),
  new Section({
    title: 'Code library components',
    autoSort: true,
    pages: [
      new Page({
        path: '/kemptyplaceholder',
        title: 'KEmptyPlaceholder',
        isCode: true,
      }),
      new Page({
        path: '/kcheckbox',
        title: 'KCheckbox',
        isCode: true,
        keywords: ['button'],
      }),
      new Page({
        path: '/kcircularloader',
        title: 'KCircularLoader',
        isCode: true,
      }),
      new Page({
        path: '/klinearloader',
        title: 'KLinearLoader',
        isCode: true,
      }),
      new Page({
        path: '/kdropdownmenu',
        title: 'KDropdownMenu',
        isCode: true,
        disabled: true,
      }),
      new Page({
        path: '/kmodal',
        title: 'KModal',
        isCode: true,
        disabled: true,
      }),
      new Page({
        path: '/kradiobutton',
        title: 'KRadioButton',
        isCode: true,
      }),
      new Page({
        path: '/ktooltip',
        title: 'KTooltip',
        isCode: true,
        disabled: true,
      }),
      new Page({
        path: '/kpagecontainer',
        title: 'KPageContainer',
        isCode: true,
        disabled: true,
      }),
      new Page({
        path: '/kpagecontainerdivider',
        title: 'KPageContainerDivider',
        isCode: true,
        disabled: true,
      }),
      new Page({
        path: '/kpagecontainertabs',
        title: 'KPageContainerTabs',
        isCode: true,
        disabled: true,
      }),
      new Page({
        path: '/kpagecontainertablink',
        title: 'KPageContainerTabLink',
        isCode: true,
        disabled: true,
      }),
      new Page({
        path: '/kicon',
        title: 'KIcon',
        isCode: true,
        disabled: true,
      }),
      new Page({
        path: '/kiconbutton',
        title: 'KIconButton',
        isCode: true,
        keywords: buttonRelatedItems,
      }),
      new Page({
        path: '/klabeledicon',
        title: 'KLabeledIcon',
        isCode: true,
        disabled: true,
      }),
      new Page({
        path: '/kswitch',
        title: 'KSwitch',
        isCode: true,
        keywords: ['button'],
      }),
      new Page({
        path: '/kbutton',
        title: 'KButton',
        isCode: true,
        keywords: buttonRelatedItems,
      }),
      new Page({
        path: '/kexternallink',
        title: 'KExternalLink',
        isCode: true,
        keywords: buttonRelatedItems,
      }),
      new Page({
        path: '/krouterlink',
        title: 'KRouterLink',
        isCode: true,
        keywords: buttonRelatedItems,
      }),
      new Page({
        path: '/kbuttongroup',
        title: 'KButtonGroup',
        isCode: true,
        keywords: ['button'],
      }),
      new Page({
        path: '/kcontentrenderer',
        title: 'KContentRenderer',
        isCode: true,
        disabled: true,
      }),
      new Page({
        path: '/kgrid',
        title: 'KGrid',
        isCode: true,
        disabled: true,
      }),
      new Page({
        path: '/kfixedgrid',
        title: 'KFixedGrid',
        isCode: true,
        disabled: true,
      }),
      new Page({
        path: '/kgriditem',
        title: 'KGridItem',
        isCode: true,
        disabled: true,
      }),
      new Page({
        path: '/kfixedgriditem',
        title: 'KFixedGridItem',
        isCode: true,
        disabled: true,
      }),
      new Page({
        path: '/ktextfield',
        title: 'KTextfield',
        isCode: true,
        disabled: true,
      }),
    ],
  }),
];
