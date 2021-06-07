import sqlite3


class Interaction:
    con = sqlite3.connect('./todos_db.sqlite')
    c = con.cursor()

    def create_table(self):
        self.c.execute('''
            CREATE TABLE todolists (
            id integer PRIMARY KEY,
           title text UNIQUE NOT NULL
        );''')
        self.c.execute('''
            CREATE TABLE todo (
              id integer PRIMARY KEY,
              title text UNIQUE NOT NULL,
              text text NOT NULL,
              todolist integer NOT NULL,
              timestamp text NOT NULL,
              FOREIGN KEY(todolist) REFERENCES totolists(id)
        );''')
        self.con.commit()

    def close_con(self):
        self.con.close()

    def add_todo_list(self, title):
        self.c.execute('''
            INSERT INTO todolists
                 (title)
            VALUES 
            (?)
        ''', (title,))
        self.con.commit()

    def add_todo(self, title, text, todolist, timestamp):
        self.c.execute('''
            INSERT INTO todo
                (title, text, todolist, timestamp)
            VALUES 
                (?, ?, ?, ?)
            ''', (title, text, todolist, timestamp))
        self.con.commit()

    def show_todos(self, list_id):
        self.c.execute('''
            SELECT *
            FROM
                todo
            WHERE
                todolist = ?
        ''', (list_id,))
        all_todos = self.c.fetchall()
        for todo in all_todos:
            print(f'{todo[0]}. {todo[1]}\n'
                  f'{todo[2]}/n'
                  f'created: {todo[4]}')

    def show_todolists(self):
        self.c.execute('''
            SELECT *
            FROM
                todolists
        ''')
        all_todolists = self.c.fetchall()
        for list in all_todolists:
            print(f'{list[0]}. {list[1]}')

    def delete_todo(self, todo_id):
        self.c.execute('''
            DELETE FROM todo
            WHERE id = ?;
        ''', (todo_id, ))
        self.con.commit()

    def delete_todo_list(self,todolist_id):
        self.c.execute('''
            DELETE FROM todolists
            WHERE id = ?;
        ''', (todolist_id, ))
        self.con.commit()

    def search(self, title):
        self.c.execute('''
            SELECT *
            FROM
                todo
            WHERE title = ?
            LIMIT 1
        ''', (title,))
        resp = self.c.fetchall()
        return resp
#

# create_table()

# int = Interaction()
# add_todo_list('')
# add_todo('do things', 'im lazy so i do nothing', 1)
# int.delete_todo(1)
# print(show_todolists())
# print(search('do things'))
