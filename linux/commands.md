### Linux Notes

# file creation

```shell
touch file.txt
cat file.txt
echo > file.txt
```

# rm
- `rm *.pdf`
# file permissions

- use a + or - (plus or minus sign) to add or remove permissions for a file respectively. Use an equals sign =, to
  specify new permissions and remove the old ones for the particular type of user(s).
- a (all (everyone)), u (user), g (group) and o (other)
- rwx

```
    chmod u+rw somefile
    chmod 777 somefile
```

```
-rw-r--r-- 12 linuxize users 12.0K Apr  8 20:51 filename.txt
|[-][-][-]-   [------] [---]
| |  |  | |      |       |
| |  |  | |      |       +-----------> 7. Group
| |  |  | |      +-------------------> 6. Owner
| |  |  | +--------------------------> 5. Alternate Access Method
| |  |  +----------------------------> 4. Others Permissions
| |  +-------------------------------> 3. Group Permissions
| +----------------------------------> 2. Owner Permissions
+------------------------------------> 1. File Type
```

| # | Sum                | rwx | Permission              |
|---|--------------------|:---:|-------------------------|
| 7 | 4(r) + 2(w) + 1(x) | rwx | read, write and execute |
| 6 | 4(r) + 2(w)        | rw- | read and write          |
| 5 | 4(r)        + 1(x) | r-x | read and execute        |
| 4 | 4(r)               | r-- | read only               |
| 3 |        2(w) + 1(x) | -wx | write and execute       |
| 2 |        2(w)        | -w- | write only              |
| 1 |               1(x) | --x | execute only            |
| 0 | 0                  | --- | none                    |

# Changes the ownership rights of a file

- This program can only be used by root.
- `chown owner:group the_file_name`

# Link files

`ln -s source_file symbolic_link`

# ls

- Вывести / символ slash после название папки;
- Отсортировать по time modified по убыванию;
- `ls -Ft`

# wc : word count

- `-l`: This option prints the number of lines
- `-w`: This option prints the number of words present in a file.
- `-c`: This option displays count of bytes present in a file.
- `-m`: Using -m option ‘wc’ command displays count of characters from a file.
- `-L`: The ‘wc’ command allow an argument -L, it can be used to print out the length of longest (number of characters)
  line in a file.
- `–version`: This option is used to display the version of wc which is currently running on your system.

# Create file with no line break

```shell
printf "xxx" >> file
echo -n "xxx" >> file
```

# find

```shell
find . -name "j*" -o -name "*n" -o \( -name "n*" -o -name "*j]" \)
find . -name "*.md"
find . -type f | wc -l
find . -type d | wc -l
```

# ls with awk

- Написать команду, которая покажет все содержимое в текущей директории в формате user filename. Не показывать в выводе
  директории . и ...

```shell
ls -l | awk '{print $3, $9}'
```

# tail

- Команда tail для показа последних строк в файле

```shell
tail -5 ./access.log
```

# head

-Команда head для показа первых строк в файле

```shell
head -5 ./access.log
```

# sed

- Написать скрипт, который заменит в файле access.log текст jusan.kz на example.com глобально.

```shell
sed -i 's/jusan.kz/example.com/g' access.log
```

# tr

1. How to convert lower case to upper case

```shell
cat greekfile | tr "[a-z]" "[A-Z]"
cat geekfile | tr "[:lower:]" "[:upper:]"
```

2. The following command will translate all the white-space to tabs

```shell
echo "Welcome To GeeksforGeeks" | tr [:space:] '\t'
```

# grep

- Написать скрипт, который покажет в файле ./access.log только линии содержащие jusan.kz.

```shell
grep 'jusan.kz' ./access.log
```

# cat EOF

- Написать скрипт, который запишет в файл output.txt следующие линии:

```shell
cat > output.txt <<EOF
Lorem ipsum dolor sit amet,
EOF
```

# curl and jq

```shell
curl -s https://stepik.org:443/api/users/1 | jq ".path"
```

# useradd & usermod

- Если запускать с флагом `userdel -r`, то удалит еще домашний каталог пользователя.

# newgrp & groupadd & groupmod

- В этом примере john задействует команду `newgrp groupname`, чтобы группа finance временно стала основной, и создает
  файл:
- `groupadd groupname`
- Суперпользователь может изменять группы из командной строки с помощью команды `groupmod`.
- `groupmod -n new_groupname groupname`

# Processes via ps

```shell
ps -aux
ps -A
ps -e
```
