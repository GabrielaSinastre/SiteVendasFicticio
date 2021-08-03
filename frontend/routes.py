import os
import sqlite3
from flask import Flask, render_template, request
from werkzeug.utils import secure_filename


UPLOAD_FOLDER = 'd:/College/DW/SiteVendasFicticio/frontend/static/uploads/'

#conectando o bd
def get_db_connection():
    path = 'd:/College/DW/SiteVendasFicticio/frontend/static/scripts/'
    conn = sqlite3.connect(path + 'ggwp.db')
    conn.row_factory = sqlite3.Row
    return conn
 
app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

@app.route('/home', methods=['POST', 'GET'])
def ggwphome():
    conn = get_db_connection()
    infos = conn.execute('SELECT * FROM Produto').fetchall()
    conn.close()
    if request.method == 'POST':
        #coloca os dados do formulario na variavel user
        user = request.form
        #print(user)

        #upload de imagem e a armazena
        img = request.files['file']
        filename = secure_filename(img.filename)
        img.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
        #print(filename)
                
        #instancia o bd e adiciona os valores do forms
        conn = get_db_connection()
        conn.execute("INSERT INTO USUARIO (NOME, IMAGEM, RUA, CIDADE, ESTADO, ZIPCODE) VALUES (?, ?, ?, ?, ?, ?)", (user['name'], filename, user['street'], user['city'], user['state'], user['zip']))
        conn.commit()
        conn.close()
        

        
        #print(user['imagem'])
        #print("Posted data : {}".format(reg))
    return render_template('index.html',infos = infos)


@app.route('/addprod', methods=['POST', 'GET'])
def ggwpaddprod():
    if (request.method == 'POST'):
        user = request.form
        
        prodimg = request.files['prodimg']
        filenameprodimg = secure_filename(prodimg.filename)
        prodimg.save(os.path.join(app.config['UPLOAD_FOLDER'], filenameprodimg))
        #adiciona produto nos usuarios
        conn = get_db_connection()
        conn.execute("INSERT INTO PRODUTO (NOME, PRECO, CATEGORIA, IMAGEM) VALUES (?, ?, ?, ?)", (user['prodname'], user['prodprice'], user['prodcat'], filenameprodimg))
        conn.commit()
        conn.close()
    return render_template('index4.html')

@app.route('/bag')
def ggwpbag():
    conn = get_db_connection()
    infosuser = conn.execute('SELECT * FROM Usuario ORDER BY id DESC LIMIT 1').fetchall()
    conn.close()
    #print(infosuser)[0]['imagem']
    #print(infosuser[0]['cidade'])
    return render_template('index2.html',infosuser = infosuser)
    

@app.route('/paymentconfirmed')
def ggwppayment():
    return render_template('index3.html')

if __name__ == '__main__':
    app.run()

