import subprocess

def git_add_commit_push(repo_path, commit_message):
    # Executa o comando 'git add .' no diretório do repositório
    subprocess.run(['git', 'add', '.'], cwd=repo_path)

    # Executa o comando 'git commit -m "<mensagem do commit>"' no diretório do repositório
    subprocess.run(['git', 'commit', '-m', commit_message], cwd=repo_path)

    # Executa o comando 'git push origin <branch>' no diretório do repositório
    subprocess.run(['git', 'push', 'origin', 'master'], cwd=repo_path)

# Exemplo de uso
repo_path = 'C:\Users\suporte\Desktop\projetos'
commit_message = 'Commit automático'

git_add_commit_push(repo_path, commit_message)