import sqlite3
from sqlite3.dbapi2 import Cursor 


path = 'd:/College/DW/SiteVendasFicticio/frontend/static/scripts/'

conn = sqlite3.connect(path + 'ggwp.db')

'''print('banco de dados criado com sucesso')'''

#criando tabelas 
"""conn.execute('''
            create table Produto
            (id integer primary key AUTOINCREMENT,
             nome text not null,
             preco int not null,
             categoria text not null,
             imagem BLOB);
            '''
            )

conn.execute('''
            create table Usuario
            (id integer primary key AUTOINCREMENT,
            nome text not null,
            imagem BLOB,
            rua text not null,
            cidade text not null,
            estado text not null,
            zipcode text not null);
            ''')
print('tabela criada com sucesso')
"""

#conn.execute("INSERT INTO USUARIO (ID, NOME, IMAGEM, RUA, CIDADE, ESTADO, ZIPCODE VALUES (?,?,?,?,?,?,?)", (infos))
#conn.execute("INSERT INTO PRODUTO (NOME, PRECO, CATEGORIA, IMAGEM) VALUES ('Gamer Keyboard', 269, 'Keyboard', '/static/images/tecrgb.jpg')")
#conn.execute("INSERT INTO PRODUTO (ID, NOME, PRECO, CATEGORIA, IMAGEM) VALUES (2, 'Gamer Mouse', 187, 'Mouse', '/static/images/mousergb.png')")
#conn.execute("INSERT INTO PRODUTO (NOME, PRECO, CATEGORIA, IMAGEM) VALUES ('Gamer Mouse', 95, 'Mouse', 'mousergb.png')")
#conn.execute("INSERT INTO PRODUTO (NOME, PRECO, CATEGORIA, IMAGEM) VALUES ('Gamer Keyboard', 269, 'Keyboard', 'tecrgb.jpg')")
#conn.execute("INSERT INTO PRODUTO (NOME, PRECO, CATEGORIA, IMAGEM) VALUES ('Gamer Cabinet', 300, 'Cabinet', 'cpugamer.jpg')")

#cursor = conn.execute("SELECT id, nome, preco, categoria, imagem from PRODUTO")
cursor = conn.execute("SELECT * FROM PRODUTO")
#conn.commit()

for row in cursor:
    print("ID = ", row[0])
    print("NOME = ", row[1])
    print("IMAGE = ", row[2])
    print("RUA = ", row[3])
    print("CIDADE = ", row[4], "\n")
    print("")



conn.close()

