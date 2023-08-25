import psycopg2

url="postgresql://postgres:nabta%4010102002@localhost:5432/project_db"
def connection():

    return  psycopg2.connect(
        host='localhost',
        user='postgres',
        password='nabta@10102002',
        database='project_db'
    )
