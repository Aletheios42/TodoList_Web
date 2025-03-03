// src/main.ts
import { bootstrapApplication } from "/@fs/home/aletheios/Documents/Cursos/Angular/TodoList_Web/.angular/cache/18.2.14/essentials/vite/deps/@angular_platform-browser.js?v=5b0ce29a";

// src/app/app.component.ts
import { Component as Component6 } from "/@fs/home/aletheios/Documents/Cursos/Angular/TodoList_Web/.angular/cache/18.2.14/essentials/vite/deps/@angular_core.js?v=5b0ce29a";

// src/app/header/header.component.ts
import { Component } from "/@fs/home/aletheios/Documents/Cursos/Angular/TodoList_Web/.angular/cache/18.2.14/essentials/vite/deps/@angular_core.js?v=5b0ce29a";
import * as i0 from "/@fs/home/aletheios/Documents/Cursos/Angular/TodoList_Web/.angular/cache/18.2.14/essentials/vite/deps/@angular_core.js?v=5b0ce29a";
var HeaderComponent = class _HeaderComponent {
  static {
    this.\u0275fac = function HeaderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HeaderComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ i0.\u0275\u0275defineComponent({ type: _HeaderComponent, selectors: [["app-header"]], standalone: true, features: [i0.\u0275\u0275StandaloneFeature], decls: 7, vars: 0, consts: [["src", "./assets/task-management-logo.png", "alt", "A Todo List"]], template: function HeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275elementStart(0, "header");
        i0.\u0275\u0275element(1, "img", 0);
        i0.\u0275\u0275elementStart(2, "div")(3, "h1");
        i0.\u0275\u0275text(4, "Easy Task!");
        i0.\u0275\u0275elementEnd();
        i0.\u0275\u0275elementStart(5, "p");
        i0.\u0275\u0275text(6, "Enterprise-level task management without friction");
        i0.\u0275\u0275elementEnd()()();
      }
    }, styles: ["\n\nheader[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n  width: 90%;\n  max-width: 50rem;\n  margin: 0 auto 2rem auto;\n  text-align: center;\n  background:\n    linear-gradient(\n      to bottom,\n      #2c0a4c,\n      #450d80);\n  padding: 1rem;\n  border-bottom-right-radius: 12px;\n  border-bottom-left-radius: 12px;\n  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.6);\n}\nimg[_ngcontent-%COMP%] {\n  width: 3.5rem;\n  object-fit: contain;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  margin: 0;\n  padding: 0;\n}\np[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.8rem;\n  text-wrap: balance;\n}\n@media (min-width: 768px) {\n  header[_ngcontent-%COMP%] {\n    padding: 2rem;\n  }\n  img[_ngcontent-%COMP%] {\n    width: 4.5rem;\n  }\n  h1[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n    margin: 0;\n    padding: 0;\n  }\n}\n/*# sourceMappingURL=header.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassDebugInfo(HeaderComponent, { className: "HeaderComponent", filePath: "src/app/header/header.component.ts", lineNumber: 10 });
})();

// src/app/user/user.component.ts
import { Component as Component2, EventEmitter, Input, Output } from "/@fs/home/aletheios/Documents/Cursos/Angular/TodoList_Web/.angular/cache/18.2.14/essentials/vite/deps/@angular_core.js?v=5b0ce29a";
import * as i02 from "/@fs/home/aletheios/Documents/Cursos/Angular/TodoList_Web/.angular/cache/18.2.14/essentials/vite/deps/@angular_core.js?v=5b0ce29a";
var UserComponent = class _UserComponent {
  constructor() {
    this.select = new EventEmitter();
  }
  get imagePath() {
    return "assets/users/" + this.user.avatar;
  }
  onSelectUser() {
    this.select.emit(this.user.id);
  }
  static {
    this.\u0275fac = function UserComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ i02.\u0275\u0275defineComponent({ type: _UserComponent, selectors: [["app-user"]], inputs: { user: "user", selected: "selected" }, outputs: { select: "select" }, standalone: true, features: [i02.\u0275\u0275StandaloneFeature], decls: 5, vars: 5, consts: [[3, "click"], [3, "src", "alt"]], template: function UserComponent_Template(rf, ctx) {
      if (rf & 1) {
        i02.\u0275\u0275elementStart(0, "div")(1, "button", 0);
        i02.\u0275\u0275listener("click", function UserComponent_Template_button_click_1_listener() {
          return ctx.onSelectUser();
        });
        i02.\u0275\u0275element(2, "img", 1);
        i02.\u0275\u0275elementStart(3, "span");
        i02.\u0275\u0275text(4);
        i02.\u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        i02.\u0275\u0275advance();
        i02.\u0275\u0275classProp("active", ctx.selected);
        i02.\u0275\u0275advance();
        i02.\u0275\u0275property("src", ctx.imagePath, i02.\u0275\u0275sanitizeUrl)("alt", ctx.user.name);
        i02.\u0275\u0275advance(2);
        i02.\u0275\u0275textInterpolate(ctx.user.name);
      }
    }, styles: ["\n\ndiv[_ngcontent-%COMP%] {\n  border-radius: 6px;\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n}\nbutton[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.35rem 0.5rem;\n  background-color: #433352;\n  color: #c3b3d1;\n  border: none;\n  font: inherit;\n  cursor: pointer;\n  width: 100%;\n  min-width: 10rem;\n  text-align: left;\n}\nbutton[_ngcontent-%COMP%]:hover, \nbutton[_ngcontent-%COMP%]:active, \n.active[_ngcontent-%COMP%] {\n  background-color: #9965dd;\n  color: #150722;\n}\nimg[_ngcontent-%COMP%] {\n  width: 2rem;\n  object-fit: contain;\n  border-radius: 50%;\n  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);\n}\nspan[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  font-size: 0.8rem;\n  font-weight: normal;\n}\n/*# sourceMappingURL=user.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i02.\u0275setClassDebugInfo(UserComponent, { className: "UserComponent", filePath: "src/app/user/user.component.ts", lineNumber: 11 });
})();

// src/app/dummy-users.ts
var DUMMY_USERS = [
  {
    id: "u1",
    name: "Jasmine Washington",
    avatar: "user-1.jpg"
  },
  {
    id: "u2",
    name: "Emily Thompson",
    avatar: "user-2.jpg"
  },
  {
    id: "u3",
    name: "Marcus Johnson",
    avatar: "user-3.jpg"
  },
  {
    id: "u4",
    name: "David Miller",
    avatar: "user-4.jpg"
  },
  {
    id: "u5",
    name: "Priya Patel",
    avatar: "user-5.jpg"
  },
  {
    id: "u6",
    name: "Arjun Singh",
    avatar: "user-6.jpg"
  }
];

// src/app/tasks/tasks.component.ts
import { Component as Component5, Input as Input3 } from "/@fs/home/aletheios/Documents/Cursos/Angular/TodoList_Web/.angular/cache/18.2.14/essentials/vite/deps/@angular_core.js?v=5b0ce29a";

// src/app/tasks/task/task.component.ts
import { Component as Component3, EventEmitter as EventEmitter2, Input as Input2, Output as Output2 } from "/@fs/home/aletheios/Documents/Cursos/Angular/TodoList_Web/.angular/cache/18.2.14/essentials/vite/deps/@angular_core.js?v=5b0ce29a";
import * as i03 from "/@fs/home/aletheios/Documents/Cursos/Angular/TodoList_Web/.angular/cache/18.2.14/essentials/vite/deps/@angular_core.js?v=5b0ce29a";
var TaskComponent = class _TaskComponent {
  constructor() {
    this.complete = new EventEmitter2();
  }
  onCompleteTask() {
    this.complete.emit(this.task.id);
  }
  static {
    this.\u0275fac = function TaskComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TaskComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ i03.\u0275\u0275defineComponent({ type: _TaskComponent, selectors: [["app-task"]], inputs: { task: "task" }, outputs: { complete: "complete" }, standalone: true, features: [i03.\u0275\u0275StandaloneFeature], decls: 10, vars: 3, consts: [[1, "actions"], [3, "click"]], template: function TaskComponent_Template(rf, ctx) {
      if (rf & 1) {
        i03.\u0275\u0275elementStart(0, "article")(1, "h2");
        i03.\u0275\u0275text(2);
        i03.\u0275\u0275elementEnd();
        i03.\u0275\u0275elementStart(3, "time");
        i03.\u0275\u0275text(4);
        i03.\u0275\u0275elementEnd();
        i03.\u0275\u0275elementStart(5, "p");
        i03.\u0275\u0275text(6);
        i03.\u0275\u0275elementEnd();
        i03.\u0275\u0275elementStart(7, "p", 0)(8, "button", 1);
        i03.\u0275\u0275listener("click", function TaskComponent_Template_button_click_8_listener() {
          return ctx.onCompleteTask();
        });
        i03.\u0275\u0275text(9, "Complete");
        i03.\u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        i03.\u0275\u0275advance(2);
        i03.\u0275\u0275textInterpolate(ctx.task.title);
        i03.\u0275\u0275advance(2);
        i03.\u0275\u0275textInterpolate(ctx.task.dueDate);
        i03.\u0275\u0275advance(2);
        i03.\u0275\u0275textInterpolate(ctx.task.summary);
      }
    }, styles: ["\n\narticle[_ngcontent-%COMP%] {\n  padding: 1rem;\n  color: #25113d;\n  background-color: #bf9ee5;\n}\nh2[_ngcontent-%COMP%] {\n  margin: 0;\n}\ntime[_ngcontent-%COMP%] {\n  color: #3c2c50;\n}\n.actions[_ngcontent-%COMP%] {\n  text-align: right;\n  margin: 0;\n}\n.actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font: inherit;\n  font-size: 0.9rem;\n  cursor: pointer;\n  background-color: #380774;\n  color: #decdf2;\n  border-radius: 4px;\n  padding: 0.5rem 1.5rem;\n  border: none;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);\n  transition: all 0.3s ease;\n}\n.actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, \n.actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active {\n  background-color: #4a0774;\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.3);\n}\n/*# sourceMappingURL=task.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i03.\u0275setClassDebugInfo(TaskComponent, { className: "TaskComponent", filePath: "src/app/tasks/task/task.component.ts", lineNumber: 11 });
})();

// src/app/tasks/new-task/new-task.component.ts
import { Component as Component4 } from "/@fs/home/aletheios/Documents/Cursos/Angular/TodoList_Web/.angular/cache/18.2.14/essentials/vite/deps/@angular_core.js?v=5b0ce29a";
import * as i04 from "/@fs/home/aletheios/Documents/Cursos/Angular/TodoList_Web/.angular/cache/18.2.14/essentials/vite/deps/@angular_core.js?v=5b0ce29a";
var NewTaskComponent = class _NewTaskComponent {
  static {
    this.\u0275fac = function NewTaskComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NewTaskComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ i04.\u0275\u0275defineComponent({ type: _NewTaskComponent, selectors: [["app-new-task"]], standalone: true, features: [i04.\u0275\u0275StandaloneFeature], decls: 22, vars: 0, consts: [[1, "backdrop"], ["open", ""], ["for", "title"], ["type", "text", "id", "title", "name", "title"], ["for", "summary"], ["id", "summary", "rows", "5", "name", "summary"], ["for", "due-date"], ["type", "date", "id", "due-date", "name", "due-date"], [1, "actions"], ["type", "button"], ["type", "submit"]], template: function NewTaskComponent_Template(rf, ctx) {
      if (rf & 1) {
        i04.\u0275\u0275element(0, "div", 0);
        i04.\u0275\u0275elementStart(1, "dialog", 1)(2, "h2");
        i04.\u0275\u0275text(3, "Add Task");
        i04.\u0275\u0275elementEnd();
        i04.\u0275\u0275elementStart(4, "form")(5, "p")(6, "label", 2);
        i04.\u0275\u0275text(7, "Title");
        i04.\u0275\u0275elementEnd();
        i04.\u0275\u0275element(8, "input", 3);
        i04.\u0275\u0275elementEnd();
        i04.\u0275\u0275elementStart(9, "p")(10, "label", 4);
        i04.\u0275\u0275text(11, "Summary");
        i04.\u0275\u0275elementEnd();
        i04.\u0275\u0275element(12, "textarea", 5);
        i04.\u0275\u0275elementEnd();
        i04.\u0275\u0275elementStart(13, "p")(14, "label", 6);
        i04.\u0275\u0275text(15, "Due Date");
        i04.\u0275\u0275elementEnd();
        i04.\u0275\u0275element(16, "input", 7);
        i04.\u0275\u0275elementEnd();
        i04.\u0275\u0275elementStart(17, "p", 8)(18, "button", 9);
        i04.\u0275\u0275text(19, "Cancel");
        i04.\u0275\u0275elementEnd();
        i04.\u0275\u0275elementStart(20, "button", 10);
        i04.\u0275\u0275text(21, "Create");
        i04.\u0275\u0275elementEnd()()()();
      }
    }, styles: ["\n\n.backdrop[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.9);\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100vh;\n}\ndialog[_ngcontent-%COMP%] {\n  width: 90%;\n  max-width: 30rem;\n  background-color: #433352;\n  border-radius: 6px;\n  border: none;\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.4);\n  overflow: hidden;\n  padding: 1rem;\n  top: 5rem;\n}\nh2[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #d0c2e1;\n}\nlabel[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: bold;\n  font-size: 0.85rem;\n  color: #ab9ac0;\n}\ninput[_ngcontent-%COMP%], \ntextarea[_ngcontent-%COMP%] {\n  width: 100%;\n  font: inherit;\n  padding: 0.15rem 0.25rem;\n  border-radius: 4px;\n  border: 1px solid #ab9ac0;\n  background-color: #d0c2e1;\n}\n.actions[_ngcontent-%COMP%] {\n  margin: 1rem 0 0;\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.25rem;\n}\nbutton[_ngcontent-%COMP%] {\n  font: inherit;\n  cursor: pointer;\n  border: none;\n  padding: 0.35rem 1.25rem;\n  border-radius: 4px;\n  background-color: transparent;\n}\nbutton[type=button][_ngcontent-%COMP%] {\n  color: #bdadcf;\n}\nbutton[type=button][_ngcontent-%COMP%]:hover, \nbutton[type=button][_ngcontent-%COMP%]:active {\n  color: #d0c2e1;\n}\nbutton[type=submit][_ngcontent-%COMP%] {\n  background-color: #9c73ca;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);\n  transition: all 0.3s ease;\n}\nbutton[type=submit][_ngcontent-%COMP%]:hover, \nbutton[type=submit][_ngcontent-%COMP%]:active {\n  background-color: #895cce;\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.3);\n}\n@media (min-width: 768px) {\n  dialog[_ngcontent-%COMP%] {\n    padding: 2rem;\n  }\n}\n/*# sourceMappingURL=new-task.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i04.\u0275setClassDebugInfo(NewTaskComponent, { className: "NewTaskComponent", filePath: "src/app/tasks/new-task/new-task.component.ts", lineNumber: 10 });
})();

// src/app/tasks/tasks.component.ts
import * as i05 from "/@fs/home/aletheios/Documents/Cursos/Angular/TodoList_Web/.angular/cache/18.2.14/essentials/vite/deps/@angular_core.js?v=5b0ce29a";
var _forTrack0 = ($index, $item) => $item.id;
function TasksComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    i05.\u0275\u0275element(0, "app-new-task");
  }
}
function TasksComponent_Conditional_1_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = i05.\u0275\u0275getCurrentView();
    i05.\u0275\u0275elementStart(0, "li")(1, "app-task", 2);
    i05.\u0275\u0275listener("complete", function TasksComponent_Conditional_1_For_9_Template_app_task_complete_1_listener($event) {
      i05.\u0275\u0275restoreView(_r3);
      const ctx_r1 = i05.\u0275\u0275nextContext(2);
      return i05.\u0275\u0275resetView(ctx_r1.onDeletingTask($event));
    });
    i05.\u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const task_r4 = ctx.$implicit;
    i05.\u0275\u0275advance();
    i05.\u0275\u0275property("task", task_r4);
  }
}
function TasksComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = i05.\u0275\u0275getCurrentView();
    i05.\u0275\u0275elementStart(0, "section", 0)(1, "header")(2, "h2");
    i05.\u0275\u0275text(3);
    i05.\u0275\u0275elementEnd();
    i05.\u0275\u0275elementStart(4, "menu")(5, "button", 1);
    i05.\u0275\u0275listener("click", function TasksComponent_Conditional_1_Template_button_click_5_listener() {
      i05.\u0275\u0275restoreView(_r1);
      const ctx_r1 = i05.\u0275\u0275nextContext();
      return i05.\u0275\u0275resetView(ctx_r1.onAddingTask());
    });
    i05.\u0275\u0275text(6, "Add Task");
    i05.\u0275\u0275elementEnd()()();
    i05.\u0275\u0275elementStart(7, "ul");
    i05.\u0275\u0275repeaterCreate(8, TasksComponent_Conditional_1_For_9_Template, 2, 1, "li", null, _forTrack0);
    i05.\u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = i05.\u0275\u0275nextContext();
    i05.\u0275\u0275advance(3);
    i05.\u0275\u0275textInterpolate1("", ctx_r1.name, "`s Tasks");
    i05.\u0275\u0275advance(5);
    i05.\u0275\u0275repeater(ctx_r1.selectedUserTasks);
  }
}
var TasksComponent = class _TasksComponent {
  constructor() {
    this.isAddingTask = false;
    this.tasks = [
      {
        id: "t1",
        userId: "u1",
        title: "Master Angular",
        summary: "Learn all the basic and advanced features of Angular & how to apply them.",
        dueDate: "2025-12-31"
      },
      {
        id: "t2",
        userId: "u3",
        title: "Build first prototype",
        summary: "Build a first prototype of the online shop website",
        dueDate: "2024-05-31"
      },
      {
        id: "t3",
        userId: "u3",
        title: "Prepare issue template",
        summary: "Prepare and describe an issue template which will help with project management",
        dueDate: "2024-06-15"
      }
    ];
  }
  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }
  onDeletingTask(id) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
  onAddingTask() {
    this.isAddingTask = true;
  }
  static {
    this.\u0275fac = function TasksComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TasksComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ i05.\u0275\u0275defineComponent({ type: _TasksComponent, selectors: [["app-tasks"]], inputs: { userId: "userId", name: "name" }, standalone: true, features: [i05.\u0275\u0275StandaloneFeature], decls: 2, vars: 1, consts: [["id", "tasks"], [3, "click"], [3, "complete", "task"]], template: function TasksComponent_Template(rf, ctx) {
      if (rf & 1) {
        i05.\u0275\u0275template(0, TasksComponent_Conditional_0_Template, 1, 0, "app-new-task")(1, TasksComponent_Conditional_1_Template, 10, 1, "section", 0);
      }
      if (rf & 2) {
        i05.\u0275\u0275conditional(ctx.isAddingTask ? 0 : 1);
      }
    }, dependencies: [TaskComponent, NewTaskComponent], styles: ["\n\n#tasks[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border-radius: 8px;\n  max-height: 60vh;\n  overflow: auto;\n  background-color: #3a2c54;\n}\nheader[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 2rem;\n  gap: 1rem;\n}\nh2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.9rem;\n  width: 60%;\n  text-wrap: balance;\n}\nmenu[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\nmenu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font: inherit;\n  cursor: pointer;\n  background-color: #9965dd;\n  border-radius: 4px;\n  border: none;\n  padding: 0.35rem 0.8rem;\n  font-size: 0.9rem;\n}\nmenu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, \nmenu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active {\n  background-color: #a565dd;\n}\nul[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 1rem 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  max-height: 50vh;\n  overflow: auto;\n}\n@media (min-width: 768px) {\n  h2[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n  menu[_ngcontent-%COMP%] {\n    width: auto;\n  }\n}\n/*# sourceMappingURL=tasks.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i05.\u0275setClassDebugInfo(TasksComponent, { className: "TasksComponent", filePath: "src/app/tasks/tasks.component.ts", lineNumber: 12 });
})();

// src/app/app.component.ts
import * as i06 from "/@fs/home/aletheios/Documents/Cursos/Angular/TodoList_Web/.angular/cache/18.2.14/essentials/vite/deps/@angular_core.js?v=5b0ce29a";
var _forTrack02 = ($index, $item) => $item.id;
function AppComponent_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = i06.\u0275\u0275getCurrentView();
    i06.\u0275\u0275elementStart(0, "li")(1, "app-user", 3);
    i06.\u0275\u0275listener("select", function AppComponent_For_4_Template_app_user_select_1_listener($event) {
      i06.\u0275\u0275restoreView(_r1);
      const ctx_r1 = i06.\u0275\u0275nextContext();
      return i06.\u0275\u0275resetView(ctx_r1.onSelectUser($event));
    });
    i06.\u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const user_r3 = ctx.$implicit;
    const ctx_r1 = i06.\u0275\u0275nextContext();
    i06.\u0275\u0275advance();
    i06.\u0275\u0275property("user", user_r3)("selected", user_r3.id == ctx_r1.selectedUserId);
  }
}
function AppComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    i06.\u0275\u0275element(0, "app-tasks", 1);
  }
  if (rf & 2) {
    const ctx_r1 = i06.\u0275\u0275nextContext();
    i06.\u0275\u0275property("name", ctx_r1.selectedUser.name)("userId", ctx_r1.selectedUser.id);
  }
}
function AppComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    i06.\u0275\u0275elementStart(0, "p", 2);
    i06.\u0275\u0275text(1, "Select User to see their Tasks!");
    i06.\u0275\u0275elementEnd();
  }
}
var AppComponent = class _AppComponent {
  constructor() {
    this.users = DUMMY_USERS;
  }
  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId);
  }
  onSelectUser(id) {
    this.selectedUserId = id;
  }
  static {
    this.\u0275fac = function AppComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AppComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ i06.\u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], standalone: true, features: [i06.\u0275\u0275StandaloneFeature], decls: 7, vars: 1, consts: [["id", "users"], [3, "name", "userId"], ["id", "fallback"], [3, "select", "user", "selected"]], template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        i06.\u0275\u0275element(0, "app-header");
        i06.\u0275\u0275elementStart(1, "main")(2, "ul", 0);
        i06.\u0275\u0275repeaterCreate(3, AppComponent_For_4_Template, 2, 2, "li", null, _forTrack02);
        i06.\u0275\u0275elementEnd();
        i06.\u0275\u0275template(5, AppComponent_Conditional_5_Template, 1, 2, "app-tasks", 1)(6, AppComponent_Conditional_6_Template, 2, 0, "p", 2);
        i06.\u0275\u0275elementEnd();
      }
      if (rf & 2) {
        i06.\u0275\u0275advance(3);
        i06.\u0275\u0275repeater(ctx.users);
        i06.\u0275\u0275advance(2);
        i06.\u0275\u0275conditional(ctx.selectedUser ? 5 : 6);
      }
    }, dependencies: [HeaderComponent, UserComponent, TasksComponent], styles: ["\n\nmain[_ngcontent-%COMP%] {\n  width: 90%;\n  max-width: 50rem;\n  margin: 2.5rem auto;\n  display: grid;\n  grid-auto-flow: row;\n  gap: 2rem;\n}\n#users[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  gap: 0.5rem;\n  overflow: auto;\n}\n#fallback[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 1.15rem;\n  margin: 0;\n  text-align: center;\n}\n@media (min-width: 768px) {\n  main[_ngcontent-%COMP%] {\n    margin: 4rem auto;\n    grid-template-columns: 1fr 3fr;\n  }\n  #users[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  #fallback[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n    text-align: left;\n  }\n}\n/*# sourceMappingURL=app.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i06.\u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.component.ts", lineNumber: 14 });
})();

// src/main.ts
bootstrapApplication(AppComponent).catch((err) => console.error(err));


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tYWluLnRzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnRzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50Lmh0bWwiLCJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnRzIiwic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5odG1sIiwic3JjL2FwcC91c2VyL3VzZXIuY29tcG9uZW50LnRzIiwic3JjL2FwcC91c2VyL3VzZXIuY29tcG9uZW50Lmh0bWwiLCJzcmMvYXBwL2R1bW15LXVzZXJzLnRzIiwic3JjL2FwcC90YXNrcy90YXNrcy5jb21wb25lbnQudHMiLCJzcmMvYXBwL3Rhc2tzL3Rhc2tzLmNvbXBvbmVudC5odG1sIiwic3JjL2FwcC90YXNrcy90YXNrL3Rhc2suY29tcG9uZW50LnRzIiwic3JjL2FwcC90YXNrcy90YXNrL3Rhc2suY29tcG9uZW50Lmh0bWwiLCJzcmMvYXBwL3Rhc2tzL25ldy10YXNrL25ldy10YXNrLmNvbXBvbmVudC50cyIsInNyYy9hcHAvdGFza3MvbmV3LXRhc2svbmV3LXRhc2suY29tcG9uZW50Lmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYm9vdHN0cmFwQXBwbGljYXRpb24gfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAvYXBwLmNvbXBvbmVudCc7XG5cbmJvb3RzdHJhcEFwcGxpY2F0aW9uKEFwcENvbXBvbmVudCkuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVc2VyQ29tcG9uZW50IH0gZnJvbSAnLi91c2VyL3VzZXIuY29tcG9uZW50JztcbmltcG9ydCB7IERVTU1ZX1VTRVJTIH0gZnJvbSAnLi9kdW1teS11c2Vycyc7XG5pbXBvcnQgeyBUYXNrc0NvbXBvbmVudCB9IGZyb20gJy4vdGFza3MvdGFza3MuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXJvb3QnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbSGVhZGVyQ29tcG9uZW50LCBVc2VyQ29tcG9uZW50LCBUYXNrc0NvbXBvbmVudF0sXG4gIHRlbXBsYXRlVXJsOiAnLi9hcHAuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybDogJy4vYXBwLmNvbXBvbmVudC5jc3MnLFxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuICB1c2VycyA9IERVTU1ZX1VTRVJTO1xuICBzZWxlY3RlZFVzZXJJZD86IHN0cmluZztcblxuICBnZXQgc2VsZWN0ZWRVc2VyKCkge1xuICAgIHJldHVybiB0aGlzLnVzZXJzLmZpbmQoKHVzZXIpID0+IHVzZXIuaWQgPT09IHRoaXMuc2VsZWN0ZWRVc2VySWQpO1xuICB9XG4gIG9uU2VsZWN0VXNlcihpZDogc3RyaW5nKSB7XG4gICAgdGhpcy5zZWxlY3RlZFVzZXJJZCA9IGlkO1xuICB9XG59XG4iLCI8YXBwLWhlYWRlcj48L2FwcC1oZWFkZXI+XG48bWFpbj5cbiAgPHVsIGlkPVwidXNlcnNcIj5cbiAgICBAZm9yICh1c2VyIG9mIHVzZXJzOyB0cmFjayB1c2VyLmlkKSB7XG4gICAgICA8bGk+XG4gICAgICAgIDxhcHAtdXNlclxuICAgICAgICAgIFt1c2VyXT1cInVzZXJcIlxuICAgICAgICAgIFtzZWxlY3RlZF09XCJ1c2VyLmlkID09IHNlbGVjdGVkVXNlcklkXCJcbiAgICAgICAgICAoc2VsZWN0KT1cIm9uU2VsZWN0VXNlcigkZXZlbnQpXCJcbiAgICAgICAgLz5cbiAgICAgIDwvbGk+XG4gICAgfVxuICA8L3VsPlxuICBAaWYgKHNlbGVjdGVkVXNlcikge1xuICAgIDxhcHAtdGFza3NcbiAgICAgIFtuYW1lXT1cInNlbGVjdGVkVXNlci5uYW1lXCJcbiAgICAgIFt1c2VySWRdPVwic2VsZWN0ZWRVc2VyLmlkXCJcbiAgICA+PC9hcHAtdGFza3M+XG4gIH0gQGVsc2Uge1xuICAgIDxwIGlkPVwiZmFsbGJhY2tcIj5TZWxlY3QgVXNlciB0byBzZWUgdGhlaXIgVGFza3MhPC9wPlxuICB9XG48L21haW4+XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWhlYWRlcicsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtdLFxuICB0ZW1wbGF0ZVVybDogJy4vaGVhZGVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmw6ICcuL2hlYWRlci5jb21wb25lbnQuY3NzJ1xufSlcbmV4cG9ydCBjbGFzcyBIZWFkZXJDb21wb25lbnQge1xuXG59XG4iLCI8aGVhZGVyPlxuICA8aW1nIHNyYz1cIi4vYXNzZXRzL3Rhc2stbWFuYWdlbWVudC1sb2dvLnBuZ1wiIGFsdD1cIkEgVG9kbyBMaXN0XCIgLz5cbiAgPGRpdj5cbiAgICA8aDE+RWFzeSBUYXNrITwvaDE+XG4gICAgPHA+RW50ZXJwcmlzZS1sZXZlbCB0YXNrIG1hbmFnZW1lbnQgd2l0aG91dCBmcmljdGlvbjwvcD5cbiAgPC9kaXY+XG48L2hlYWRlcj5cbiIsImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0eXBlIFVzZXIgfSBmcm9tICcuL3VzZXIubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtdXNlcicsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtdLFxuICB0ZW1wbGF0ZVVybDogJy4vdXNlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsOiAnLi91c2VyLmNvbXBvbmVudC5jc3MnLFxufSlcbmV4cG9ydCBjbGFzcyBVc2VyQ29tcG9uZW50IHtcbiAgQElucHV0KHsgcmVxdWlyZWQ6IHRydWUgfSkgdXNlciE6IFVzZXI7XG4gIEBJbnB1dCh7IHJlcXVpcmVkOiB0cnVlIH0pIHNlbGVjdGVkITogYm9vbGVhbjtcbiAgQE91dHB1dCgpIHNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gIGdldCBpbWFnZVBhdGgoKSB7XG4gICAgcmV0dXJuICdhc3NldHMvdXNlcnMvJyArIHRoaXMudXNlci5hdmF0YXI7XG4gIH1cbiAgb25TZWxlY3RVc2VyKCkge1xuICAgIHRoaXMuc2VsZWN0LmVtaXQodGhpcy51c2VyLmlkKTtcbiAgfVxufVxuIiwiPGRpdj5cbiAgPGJ1dHRvbiBbY2xhc3MuYWN0aXZlXT1cInNlbGVjdGVkXCIgKGNsaWNrKT1cIm9uU2VsZWN0VXNlcigpXCI+XG4gICAgPGltZyBbc3JjXT1cImltYWdlUGF0aFwiIFthbHRdPVwidXNlci5uYW1lXCIgLz5cbiAgICA8c3Bhbj57eyB1c2VyLm5hbWUgfX08L3NwYW4+XG4gIDwvYnV0dG9uPlxuPC9kaXY+XG4iLCJleHBvcnQgY29uc3QgRFVNTVlfVVNFUlMgPSBbXG4gIHtcbiAgICBpZDogJ3UxJyxcbiAgICBuYW1lOiAnSmFzbWluZSBXYXNoaW5ndG9uJyxcbiAgICBhdmF0YXI6ICd1c2VyLTEuanBnJyxcbiAgfSxcbiAge1xuICAgIGlkOiAndTInLFxuICAgIG5hbWU6ICdFbWlseSBUaG9tcHNvbicsXG4gICAgYXZhdGFyOiAndXNlci0yLmpwZycsXG4gIH0sXG4gIHtcbiAgICBpZDogJ3UzJyxcbiAgICBuYW1lOiAnTWFyY3VzIEpvaG5zb24nLFxuICAgIGF2YXRhcjogJ3VzZXItMy5qcGcnLFxuICB9LFxuICB7XG4gICAgaWQ6ICd1NCcsXG4gICAgbmFtZTogJ0RhdmlkIE1pbGxlcicsXG4gICAgYXZhdGFyOiAndXNlci00LmpwZycsXG4gIH0sXG4gIHtcbiAgICBpZDogJ3U1JyxcbiAgICBuYW1lOiAnUHJpeWEgUGF0ZWwnLFxuICAgIGF2YXRhcjogJ3VzZXItNS5qcGcnLFxuICB9LFxuICB7XG4gICAgaWQ6ICd1NicsXG4gICAgbmFtZTogJ0FyanVuIFNpbmdoJyxcbiAgICBhdmF0YXI6ICd1c2VyLTYuanBnJyxcbiAgfSxcbl07XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUYXNrQ29tcG9uZW50IH0gZnJvbSAnLi90YXNrL3Rhc2suY29tcG9uZW50JztcbmltcG9ydCB7IE5ld1Rhc2tDb21wb25lbnQgfSBmcm9tICcuL25ldy10YXNrL25ldy10YXNrLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC10YXNrcycsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtUYXNrQ29tcG9uZW50LCBOZXdUYXNrQ29tcG9uZW50XSxcbiAgdGVtcGxhdGVVcmw6ICcuL3Rhc2tzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmw6ICcuL3Rhc2tzLmNvbXBvbmVudC5jc3MnLFxufSlcbmV4cG9ydCBjbGFzcyBUYXNrc0NvbXBvbmVudCB7XG4gIEBJbnB1dCh7IHJlcXVpcmVkOiB0cnVlIH0pIHVzZXJJZD86IHN0cmluZztcbiAgQElucHV0KHsgcmVxdWlyZWQ6IHRydWUgfSkgbmFtZT86IHN0cmluZztcbiAgaXNBZGRpbmdUYXNrID0gZmFsc2U7XG4gIHRhc2tzID0gW1xuICAgIHtcbiAgICAgIGlkOiAndDEnLFxuICAgICAgdXNlcklkOiAndTEnLFxuICAgICAgdGl0bGU6ICdNYXN0ZXIgQW5ndWxhcicsXG4gICAgICBzdW1tYXJ5OlxuICAgICAgICAnTGVhcm4gYWxsIHRoZSBiYXNpYyBhbmQgYWR2YW5jZWQgZmVhdHVyZXMgb2YgQW5ndWxhciAmIGhvdyB0byBhcHBseSB0aGVtLicsXG4gICAgICBkdWVEYXRlOiAnMjAyNS0xMi0zMScsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ3QyJyxcbiAgICAgIHVzZXJJZDogJ3UzJyxcbiAgICAgIHRpdGxlOiAnQnVpbGQgZmlyc3QgcHJvdG90eXBlJyxcbiAgICAgIHN1bW1hcnk6ICdCdWlsZCBhIGZpcnN0IHByb3RvdHlwZSBvZiB0aGUgb25saW5lIHNob3Agd2Vic2l0ZScsXG4gICAgICBkdWVEYXRlOiAnMjAyNC0wNS0zMScsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ3QzJyxcbiAgICAgIHVzZXJJZDogJ3UzJyxcbiAgICAgIHRpdGxlOiAnUHJlcGFyZSBpc3N1ZSB0ZW1wbGF0ZScsXG4gICAgICBzdW1tYXJ5OlxuICAgICAgICAnUHJlcGFyZSBhbmQgZGVzY3JpYmUgYW4gaXNzdWUgdGVtcGxhdGUgd2hpY2ggd2lsbCBoZWxwIHdpdGggcHJvamVjdCBtYW5hZ2VtZW50JyxcbiAgICAgIGR1ZURhdGU6ICcyMDI0LTA2LTE1JyxcbiAgICB9LFxuICBdO1xuICBnZXQgc2VsZWN0ZWRVc2VyVGFza3MoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFza3MuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLnVzZXJJZCA9PT0gdGhpcy51c2VySWQpO1xuICB9XG4gIG9uRGVsZXRpbmdUYXNrKGlkOiBzdHJpbmcpIHtcbiAgICB0aGlzLnRhc2tzID0gdGhpcy50YXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2suaWQgIT09IGlkKTtcbiAgfVxuICBvbkFkZGluZ1Rhc2soKSB7XG4gICAgdGhpcy5pc0FkZGluZ1Rhc2sgPSB0cnVlO1xuICB9XG59XG4iLCJAaWYgKGlzQWRkaW5nVGFzaykge1xuICA8YXBwLW5ldy10YXNrPjwvYXBwLW5ldy10YXNrPlxufSBAZWxzZSB7XG4gIDxzZWN0aW9uIGlkPVwidGFza3NcIj5cbiAgICA8aGVhZGVyPlxuICAgICAgPGgyPnt7IG5hbWUgfX1gcyBUYXNrczwvaDI+XG4gICAgICA8bWVudT5cbiAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwib25BZGRpbmdUYXNrKClcIj5BZGQgVGFzazwvYnV0dG9uPlxuICAgICAgPC9tZW51PlxuICAgIDwvaGVhZGVyPlxuXG4gICAgPHVsPlxuICAgICAgQGZvciAodGFzayBvZiBzZWxlY3RlZFVzZXJUYXNrczsgdHJhY2sgdGFzay5pZCkge1xuICAgICAgICA8bGk+XG4gICAgICAgICAgPGFwcC10YXNrIFt0YXNrXT1cInRhc2tcIiAoY29tcGxldGUpPVwib25EZWxldGluZ1Rhc2soJGV2ZW50KVwiIC8+XG4gICAgICAgIDwvbGk+XG4gICAgICB9XG4gICAgPC91bD5cbiAgPC9zZWN0aW9uPlxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHR5cGUgVGFzayB9IGZyb20gJy4vdGFzay5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC10YXNrJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW10sXG4gIHRlbXBsYXRlVXJsOiAnLi90YXNrLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmw6ICcuL3Rhc2suY29tcG9uZW50LmNzcycsXG59KVxuZXhwb3J0IGNsYXNzIFRhc2tDb21wb25lbnQge1xuICBASW5wdXQoeyByZXF1aXJlZDogdHJ1ZSB9KSB0YXNrITogVGFzaztcbiAgQE91dHB1dCgpIGNvbXBsZXRlID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgb25Db21wbGV0ZVRhc2soKSB7XG4gICAgdGhpcy5jb21wbGV0ZS5lbWl0KHRoaXMudGFzay5pZCk7XG4gIH1cbn1cbiIsIjxhcnRpY2xlPlxuICA8aDI+e3sgdGFzay50aXRsZSB9fTwvaDI+XG4gIDx0aW1lPnt7IHRhc2suZHVlRGF0ZSB9fTwvdGltZT5cbiAgPHA+e3sgdGFzay5zdW1tYXJ5IH19PC9wPlxuICA8cCBjbGFzcz1cImFjdGlvbnNcIj5cbiAgICA8YnV0dG9uIChjbGljayk9XCJvbkNvbXBsZXRlVGFzaygpXCI+Q29tcGxldGU8L2J1dHRvbj5cbiAgPC9wPlxuPC9hcnRpY2xlPlxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1uZXctdGFzaycsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtdLFxuICB0ZW1wbGF0ZVVybDogJy4vbmV3LXRhc2suY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybDogJy4vbmV3LXRhc2suY29tcG9uZW50LmNzcydcbn0pXG5leHBvcnQgY2xhc3MgTmV3VGFza0NvbXBvbmVudCB7XG5cbn1cbiIsIjxkaXYgY2xhc3M9XCJiYWNrZHJvcFwiPjwvZGl2PlxuPGRpYWxvZyBvcGVuPlxuICA8aDI+QWRkIFRhc2s8L2gyPlxuICA8Zm9ybT5cbiAgICA8cD5cbiAgICAgIDxsYWJlbCBmb3I9XCJ0aXRsZVwiPlRpdGxlPC9sYWJlbD5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwidGl0bGVcIiBuYW1lPVwidGl0bGVcIiAvPlxuICAgIDwvcD5cblxuICAgIDxwPlxuICAgICAgPGxhYmVsIGZvcj1cInN1bW1hcnlcIj5TdW1tYXJ5PC9sYWJlbD5cbiAgICAgIDx0ZXh0YXJlYSBpZD1cInN1bW1hcnlcIiByb3dzPVwiNVwiIG5hbWU9XCJzdW1tYXJ5XCI+PC90ZXh0YXJlYT5cbiAgICA8L3A+XG5cbiAgICA8cD5cbiAgICAgIDxsYWJlbCBmb3I9XCJkdWUtZGF0ZVwiPkR1ZSBEYXRlPC9sYWJlbD5cbiAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIGlkPVwiZHVlLWRhdGVcIiBuYW1lPVwiZHVlLWRhdGVcIiAvPlxuICAgIDwvcD5cblxuICAgIDxwIGNsYXNzPVwiYWN0aW9uc1wiPlxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCI+Q2FuY2VsPC9idXR0b24+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5DcmVhdGU8L2J1dHRvbj5cbiAgICA8L3A+XG4gIDwvZm9ybT5cbjwvZGlhbG9nPlxu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LFFBQUEsT0FBQSxhQUFBLElBQUEsRUFBMEIsVUFBQSxPQUFBLGFBQUEsRUFBQTs7Ozs7QUFJNUIsSUFBQSw2QkFBQSxHQUFBLEtBQUEsQ0FBQTtBQUFpQixJQUFBLHFCQUFBLEdBQUEsaUNBQUE7QUFBK0IsSUFBQSwyQkFBQTs7O0FETjlDLElBQU8sZUFBUCxNQUFPLGNBQVk7RUFQekIsY0FBQTtBQVFFLFNBQUEsUUFBUTs7RUFHUixJQUFJLGVBQVk7QUFDZCxXQUFPLEtBQUssTUFBTSxLQUFLLENBQUMsU0FBUyxLQUFLLE9BQU8sS0FBSyxjQUFjO0VBQ2xFO0VBQ0EsYUFBYSxJQUFVO0FBQ3JCLFNBQUssaUJBQWlCO0VBQ3hCOzs7dUNBVFcsZUFBWTtJQUFBO0VBQUE7OzZFQUFaLGVBQVksV0FBQSxDQUFBLENBQUEsVUFBQSxDQUFBLEdBQUEsWUFBQSxNQUFBLFVBQUEsQ0FBQSxpQ0FBQSxHQUFBLE9BQUEsR0FBQSxNQUFBLEdBQUEsUUFBQSxDQUFBLENBQUEsTUFBQSxPQUFBLEdBQUEsQ0FBQSxHQUFBLFFBQUEsUUFBQSxHQUFBLENBQUEsTUFBQSxVQUFBLEdBQUEsQ0FBQSxHQUFBLFVBQUEsUUFBQSxVQUFBLENBQUEsR0FBQSxVQUFBLFNBQUEsc0JBQUEsSUFBQSxLQUFBO0FBQUEsVUFBQSxLQUFBLEdBQUE7QUNiekIsUUFBQSx3QkFBQSxHQUFBLFlBQUE7QUFDQSxRQUFBLDZCQUFBLEdBQUEsTUFBQSxFQUFNLEdBQUEsTUFBQSxDQUFBO0FBRUYsUUFBQSwrQkFBQSxHQUFBLDZCQUFBLEdBQUEsR0FBQSxNQUFBLE1BQUFDLFdBQUE7QUFTRixRQUFBLDJCQUFBO0FBQ0EsUUFBQSx5QkFBQSxHQUFBLHFDQUFBLEdBQUEsR0FBQSxhQUFBLENBQUEsRUFBb0IsR0FBQSxxQ0FBQSxHQUFBLEdBQUEsS0FBQSxDQUFBO0FBUXRCLFFBQUEsMkJBQUE7OztBQWxCSSxRQUFBLHdCQUFBLENBQUE7QUFBQSxRQUFBLHlCQUFBLElBQUEsS0FBQTtBQVVGLFFBQUEsd0JBQUEsQ0FBQTtBQUFBLFFBQUEsNEJBQUEsSUFBQSxlQUFBLElBQUEsQ0FBQTs7c0JESlUsaUJBQWlCLGVBQWUsY0FBYyxHQUFBLFFBQUEsQ0FBQSx1dEJBQUEsRUFBQSxDQUFBO0VBQUE7OztpRkFJN0MsY0FBWSxFQUFBLFdBQUEsZ0JBQUEsVUFBQSw0QkFBQSxZQUFBLEdBQUEsQ0FBQTtBQUFBLEdBQUE7OztBRFR6QixxQkFBcUIsWUFBWSxFQUFFLE1BQU0sQ0FBQyxRQUFRLFFBQVEsTUFBTSxHQUFHLENBQUM7IiwibmFtZXMiOlsiQ29tcG9uZW50IiwiQ29tcG9uZW50IiwiQ29tcG9uZW50IiwiSW5wdXQiLCJDb21wb25lbnQiLCJFdmVudEVtaXR0ZXIiLCJJbnB1dCIsIk91dHB1dCIsIkNvbXBvbmVudCIsIl9mb3JUcmFjazAiXX0=