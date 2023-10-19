# Introduction in Angular Framework

## Installation of Angular Command Line:

```
npm install -g @angular/cli@latest
```

Installation status:

```
ng version
```

Output:

```
     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/


Angular CLI: 16.2.6
Node: 18.16.0
Package Manager: npm 9.6.6
OS: linux x64

Angular:
...

Package                      Version
------------------------------------------------------
@angular-devkit/architect    0.1602.6 (cli-only)
@angular-devkit/core         16.2.6 (cli-only)
@angular-devkit/schematics   16.2.6 (cli-only)
@schematics/angular          16.2.6 (cli-only)
```

Create new app:

```
ng new angular-introduction --standalone
```

Output:

```
? Would you like to add Angular routing? No
? Which stylesheet format would you like to use? CSS
            Standalone application structure is new and not yet supported by many existing 'ng add' and 'ng update' integrations with community libraries.
CREATE angular-introduction/README.md (1073 bytes)
CREATE angular-introduction/.editorconfig (274 bytes)
CREATE angular-introduction/.gitignore (548 bytes)
CREATE angular-introduction/angular.json (3020 bytes)
CREATE angular-introduction/package.json (1051 bytes)
CREATE angular-introduction/tsconfig.json (901 bytes)
CREATE angular-introduction/tsconfig.app.json (263 bytes)
CREATE angular-introduction/tsconfig.spec.json (273 bytes)
CREATE angular-introduction/.vscode/extensions.json (130 bytes)
CREATE angular-introduction/.vscode/launch.json (470 bytes)
CREATE angular-introduction/.vscode/tasks.json (938 bytes)
CREATE angular-introduction/src/main.ts (250 bytes)
CREATE angular-introduction/src/favicon.ico (948 bytes)
CREATE angular-introduction/src/index.html (305 bytes)
CREATE angular-introduction/src/styles.css (80 bytes)
CREATE angular-introduction/src/app/app.component.css (0 bytes)
CREATE angular-introduction/src/app/app.component.html (23083 bytes)
CREATE angular-introduction/src/app/app.component.spec.ts (930 bytes)
CREATE angular-introduction/src/app/app.component.ts (319 bytes)
CREATE angular-introduction/src/app/app.config.ts (117 bytes)
CREATE angular-introduction/src/assets/.gitkeep (0 bytes)
✔ Packages installed successfully.
    Successfully initialized git.
```

## 0. Simple Binding

- Simple binding of component's class in template of component.
- Use of placeholder `{{<attribute_name>}}`.
- Object person and binding object in template.
- Characteristics of person in specific cells inside template's table.

## 1. Create new component

```
ng generate component person --dry-run
```
(Showcasing us what it will create, without doing any further actions)

```
CREATE src/app/person/person.component.css (0 bytes)
CREATE src/app/person/person.component.html (21 bytes)
CREATE src/app/person/person.component.spec.ts (554 bytes)
CREATE src/app/person/person.component.ts (297 bytes)

NOTE: The "--dry-run" option means no changes were made.
```

## 2. Component input

Creating an interface for data of type Person:

```
ng generate interface interfaces/person --dry-run
CREATE src/app/interfaces/person.ts (28 bytes)

NOTE: The "--dry-run" option means no changes were made.
```

- Use the @Input() decorator on the property person, of type Person, in the PersonComponent class.
- Need for initialization of the property with an initial value for the data.
- Check to display the initial data value in case no input is passed to the component.
- Transfer the data of the person property back to the AppComponent class.
- Bind the input property person of the PersonComponent class with the person property of the AppComponent class: In app.component.html, use brackets [...]:
  ```html
  ...
  <app-person [person]="person"></app-person>
  ```

## 3. Alternate component input - `*ngIf` directive

- Initializing an input in a component is usually done with the type <Type> | undefined (if data is passed, they will have their respective type; otherwise, the input is undefined).
- To conditionally show or hide in the template, we use the *ngIf directive.
- With <ng-container>, we group HTML code into a block that the *ngIf can be applied to (the same can be achieved by enclosing the HTML code with a <div>).
- *ngIf can take an else pointing to an #id of an HTML block enclosed by the <ng-template>.  
- Multiple <ng-template> blocks with different #ids can exist in a template.

## 4. *ngFor directive

- In templates, we can iterate the display of any HTML tag, which can also be a component selector, using the *ngFor directive:
  <app-person-alt *ngFor="let user of users" [person]="user"></app-person-alt>
- It iterates over the users array, and in each iteration, the variable user contains the current object passed as input to the PersonAltComponent class.

## 5.  Event Binding (data flow from the template to the controller)

> Installing Bootstrap in our application:
> ```
> npm i bootstrap
> ```
> Then add the following lines in the angular.json file, within the projects > angular-introduction > architect > build > options block:
> ```json
> ...
  "styles": [
             "node_modules/bootstrap/dist/css/bootstrap.min.css",
             "src/styles.css"
           ],
           "scripts": [
             "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
           ]
  ...
> ```

- For every event that can occur in the template, we have the ability to bind a method in the component class. Events are bound by enclosing their names in parentheses, for example, (click)="onClick()". The methods bound to these events are called event handlers.
- On buttons in the template, we can bind the same or different click handlers.
- Use (input)="onInput($event)" when we need to pass back to the controller the data that the user typed (the complete event is passed back to the input handler). To extract the data in the controller:
  ```typescript
  onUserInput(event: Event) {
  const target = event.target as HTMLInputElement;
  this.userInput = target.value;
  }
  ```
- The userInput can be passed back to the template using one-way binding {{ userInput }}, thus implementing two-way binding: data from the template passes back to the controller and automatically back to the template.

## 6. Component Output

- Use the @Output() decorator on a property of the class to create a custom event in the component. It is combined with the EventEmitter<T> interface, where T is the type of data that the custom event transmits.
- The custom event usually arises from a standard event in the component's template (e.g., a click on a button).

> Using index with *ngFor (automatic numbering with i during array traversal):

>
> ```html
> <tr *ngFor="let user of userData; index as i">
>   <td>{{ i }}</td>
> </tr>
> ```

- We bind the custom events of a child component by creating event handlers just as we do with standard events. For example, in the template of the parent component:

  ```html
  <app-output-demo [userData]="users" (deleteUser)="onDeleteUser($event)" (sendUser)="onSendUser($event)"> </app-output-demo>
  ```

- Then, in the parent component class, we create the event handlers:

  ```typescript
  onDeleteUser(i: number) {
    this.users.splice(i, 1);
  }

  onSendUser(user: Person) {
    this.sentUser = user;
  }
  ```
## 9. Http Client

- npm i -g json-server
- create users.json from users table, added id field
- json-server --watch users.json
- ng generate service app --dry-run
  CREATE src/app/app.service.spec.ts (342 bytes)
  CREATE src/app/app.service.ts (132 bytes)
- For using HttpClient we need to import it to app.config.ts:

  ```typescript
  import { ApplicationConfig, importProvidersFrom } from "@angular/core";
  import { HttpClientModule } from "@angular/common/http";

  export const appConfig: ApplicationConfig = {
    providers: [importProvidersFrom(HttpClientModule)],
  };
  ```

- Get all users in app.service
- Constructor inject app service in app component
- Initialization of table 'user' στο ngOnInit
