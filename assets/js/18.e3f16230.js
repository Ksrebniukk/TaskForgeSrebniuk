(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{576:function(t,a,s){"use strict";s.r(a);var v=s(31),e=Object(v.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"проєктування-бази-даних"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#проєктування-бази-даних"}},[t._v("#")]),t._v(" Проєктування бази даних")]),t._v(" "),s("h2",{attrs:{id:"модель-бізнес-об-єктів"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#модель-бізнес-об-єктів"}},[t._v("#")]),t._v(" Модель бізнес-об'єктів")]),t._v(" "),s("img",{attrs:{src:"https://www.plantuml.com/plantuml/svg/ZPLDReCm44Rtd0AH7GfHiwcwJ2MowA9ILRK7eE18jEP7jcdLszVO1iPunYgBHF5xih_nOESYLINKrF4aISt3UjMgt_HTCY7JmsDPFbpl4NHYNTNoz70p3oOybJ5wcpZlgux5dB6IycSGJSoPz2SoZw--3fpXjSpaHESmE2Z4TvvPzn7kbU-Kx9lnOIItTEFajW65pWiatLSroMZo5p5yibhXaHmayooS3hCO3IW-vlqZyLibl_2uCz4hoLgqesg77b_AM5H51g8Xe43NQ_0esffu6U6vAOgcoEs8HtKs2gqdXXBMuq89wra9XIKZwBgLtC0EWrbmmMqZfhYle67MdOUXiGRP0s-5FGJvziWs2307_IDe-JOMIc29cER51A8pj_l76lDlYDOe1i1kfjdvUCuqdOhixfXdoptadELMiinOnaVR5SorsxIPvv17AWvMXA-PkOYfuCc5zOt-9_e3",alt:"uml diagram"}}),t._v(" "),s("h1",{attrs:{id:"er-модель"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#er-модель"}},[t._v("#")]),t._v(" ER-модель")]),t._v(" "),s("img",{attrs:{src:"https://www.plantuml.com/plantuml/svg/lPHBJuGm58Nt_HLDboPCP3kh8O8P4XW93tMBdQkfyahRCPaO_xk52Wol377XNH1oJq_pdLxAJiYKorEU8OHL5MaEeaefu4G03tZvoZB0NurM5nIIoNCZYejsNQwznKdYseDc4ZdXmVATBOwTvtWW1LOKFJs4olLeXNTxAnoezuddBHWTttAzKVyRwUSeX0hm3bJwQP6-GQxWfr5-bwnAKsyy0tG4GJch92kB6LKTi3o92U-O8qx5npz3QDidP6K5V4QhEADm5TnkTrX5VvYdZvRu5WPhKGf216N6w7awKn_obnKyqonXcS5VOtIa5mT2RZUR6u8Dmy34L2_DlK5wrCJiDRsiDo8DGipMIzfCI5-zJj7ELkm-vjvvHTV-XWYX7HH7zIlu0G00",alt:"uml diagram"}}),t._v(" "),s("h2",{attrs:{id:"опис-er-моделі"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#опис-er-моделі"}},[t._v("#")]),t._v(" Опис ER-моделі")]),t._v(" "),s("h3",{attrs:{id:"roles-ролі-у-проекті"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#roles-ролі-у-проекті"}},[t._v("#")]),t._v(" Roles (Ролі у проекті)")]),t._v(" "),s("p",[t._v("Представляє собою ролі, які може приймати користувач у певному проекті.")]),t._v(" "),s("ul",[s("li",[t._v("ID: BINARY - унікальний код користувача у проекті")]),t._v(" "),s("li",[t._v("Name: VARCHAR - назва ролі")])]),t._v(" "),s("h3",{attrs:{id:"members-підписники-проекта"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#members-підписники-проекта"}},[t._v("#")]),t._v(" Members (Підписники проекта)")]),t._v(" "),s("p",[t._v("Представляє собою базу з ID користувачів, які підв'язані до проекту.")]),t._v(" "),s("ul",[s("li",[t._v("ID: BINARY - унікальний код користувача")])]),t._v(" "),s("h3",{attrs:{id:"users-користувачі"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#users-користувачі"}},[t._v("#")]),t._v(" Users (Користувачі)")]),t._v(" "),s("p",[t._v("Представляє собою користувача з його атрибутами.")]),t._v(" "),s("ul",[s("li",[t._v("ID: BINARY - унікальний код користувача")]),t._v(" "),s("li",[t._v("Username: VARCHAR - логін користувача")]),t._v(" "),s("li",[t._v("Password: VARCHAR - пароль користувача")]),t._v(" "),s("li",[t._v("Fullname: VARCHAR - справжнє ім'я користувача")]),t._v(" "),s("li",[t._v("Email: VARCHAR - поштова скринька користувача")])]),t._v(" "),s("h3",{attrs:{id:"projects-проєкти"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#projects-проєкти"}},[t._v("#")]),t._v(" Projects (Проєкти)")]),t._v(" "),s("p",[t._v("Власне представляє собою проєкт, над яким працює команда. Має поля:")]),t._v(" "),s("ul",[s("li",[t._v("ID: BINARY - унікальний код")]),t._v(" "),s("li",[t._v("Name: VARCHAR - ім'я проєкту")]),t._v(" "),s("li",[t._v("description: VARCHAR - опис проєкту")]),t._v(" "),s("li",[t._v("status: VARCHAR - статус проєкту")])]),t._v(" "),s("h3",{attrs:{id:"task-завдання"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#task-завдання"}},[t._v("#")]),t._v(" Task (Завдання)")]),t._v(" "),s("p",[t._v("Представляє собою завдання. Має поля:")]),t._v(" "),s("ul",[s("li",[t._v("ID: BINARY - унікальний код")]),t._v(" "),s("li",[t._v("Name: VARCHAR - назва завдання")]),t._v(" "),s("li",[t._v("Description: VARCHAR - опис завдання")]),t._v(" "),s("li",[t._v("Status: VARCHAR - статус завдання")]),t._v(" "),s("li",[t._v("Developer: VARCHAR - ім'я розробника, який виконує завдання")]),t._v(" "),s("li",[t._v("Price: VARCHAR - ціна виконання завдання")])]),t._v(" "),s("h3",{attrs:{id:"developers-розробники"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#developers-розробники"}},[t._v("#")]),t._v(" Developers (Розробники)")]),t._v(" "),s("p",[t._v("Developers - це сутність-асоціація, яка зберігає учасників, які працюють над проєктом.\\")]),t._v(" "),s("ul",[s("li",[t._v("ID: BINARY - унікальний код")]),t._v(" "),s("li",[t._v("Name: VARCHAR - ім'я розробника")]),t._v(" "),s("li",[t._v("Status: VARCHAR - статус розробника")])])])}),[],!1,null,null,null);a.default=e.exports}}]);