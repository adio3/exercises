import datetime
import os
from DB_interaction import Interaction

db_interaction = Interaction()


class TodoApp:
    # db_interaction.create_table()
    def check_database(self):
        x = os.listdir(r"./")
        for i in x:
            if i.endswith(".sqlite"):
                self.options()
        db_interaction.create_table()
        self.options()


    active_todo_list = 1

    def options(self):

        print('Choose a option:\n'
              'create list = create To-Do-list\n'
              'create todo = create To-Do\n'
              'show todos = show To-Dos\n'
              'delete todo = delete To-Do\n'
              'show todolists = show list of To-Do lists\n'
              'delete todolist = delete To-Do list\n'
              'exit = quit program\n'
              'help = show options')
        self.input()

    def input(self):
        option = input('Option: ')
        self.choose_option(option)

    def choose_option(self, option):
        if option == 'create list':
            self.create_list()
        if option == 'create todo':
            self.create_todo()
        if option == 'show todos':
            db_interaction.show_todos(self.active_todo_list)
            self.input()
        if option == 'show todolists':
            db_interaction.show_todolists()
            self.input()
        if option == 'help':
            self.options()
        if option == 'delete todo':
            self.delete_todo()
            self.input()
        if option == 'delete todolist':
            self.delete_todo_list()
            self.input()
        else:
            self.options()

    def create_list(self):
        title = input('Title: ')
        db_interaction.add_todo_list(title)
        self.input()

    def create_todo(self):
        title = input('Title: ')
        text = input('Text: ')
        db_interaction.add_todo(title, text, self.active_todo_list, datetime.datetime.now())
        self.input()

    def delete_todo(self):
        todo_id = int(input('ToDo number: '))
        db_interaction.delete_todo(todo_id)
        self.input()

    def delete_todo_list(self):
        todolist_id = int(input('ToDo list number: '))
        db_interaction.delete_todo_list(todolist_id)
        self.input()

todo_app = TodoApp()
todo_app.check_database()

