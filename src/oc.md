## Работа №4

### Ознакомьтесь с командой fdisk и ее возможностями из справочной документации
Команда для просмотра справочной документации:

```sh
man fdisk
```

### Создайте таблицу разделов (3 первичных и 1 логический) с помощью команды fdisk на добавленном виртуальном диске (/dev/sdb)
Запуск fdisk:

```sh
sudo fdisk /dev/sdb
```

В интерактивном режиме:

```
o     # создать новую таблицу разделов DOS (MBR)
n     # создать новый раздел
p     # создать primary раздел
1     # номер раздела
      # начать с первого сектора (по умолчанию)
+1G   # размер 1GB

n     # создать новый раздел
p     # создать primary раздел
2     # номер раздела
      # начать с первого свободного сектора (по умолчанию)
+1G   # размер 1GB

n     # создать новый раздел
p     # создать primary раздел
3     # номер раздела
      # начать с первого свободного сектора (по умолчанию)
+1G   # размер 1GB

n     # создать новый раздел
e     # создать extended раздел
4     # номер раздела
      # принять значения по умолчанию для использования оставшегося пространства

n     # создать новый логический раздел
      # номер раздела (по умолчанию первый логический)
      # принять значения по умолчанию для начала и конца

w     # записать таблицу разделов и выйти
```

### Запишите изменения на диск

Это делается автоматически при вводе команды `w` в интерактивном режиме fdisk.

### Проверьте факт создания разделов используя команду fdisk и ls

```sh
sudo fdisk -l /dev/sdb
ls /dev/sdb*
```

### Отформатируйте созданные разделы в файловую систему ext4

```sh
sudo mkfs.ext4 /dev/sdb1
sudo mkfs.ext4 /dev/sdb2
sudo mkfs.ext4 /dev/sdb3
sudo mkfs.ext4 /dev/sdb5
```

### Ознакомьтесь с командами mount и umount и их возможностями из справочной документации
Команды для просмотра справочной документации:

```sh
man mount
man umount
```

### Смонтируйте созданные разделы и создайте там произвольные файлы

```sh
sudo mkdir /mnt/sdb1 /mnt/sdb2 /mnt/sdb3 /mnt/sdb5
sudo mount /dev/sdb1 /mnt/sdb1
sudo mount /dev/sdb2 /mnt/sdb2
sudo mount /dev/sdb3 /mnt/sdb3
sudo mount /dev/sdb5 /mnt/sdb5

sudo touch /mnt/sdb1/file1.txt
sudo touch /mnt/sdb2/file2.txt
sudo touch /mnt/sdb3/file3.txt
sudo touch /mnt/sdb5/file5.txt
```

### Сделайте резервную копию MBR с помощью утилиты DD

```sh
sudo dd if=/dev/sdb of=~/mbr_backup.img bs=512 count=1
```

### Сотрите таблицу разделов MBR с помощью утилиты DD

```sh
sudo dd if=/dev/zero of=/dev/sdb bs=512 count=1
```

### Восстановите MBR с помощью утилиты DD

```sh
sudo dd if=~/mbr_backup.img of=/dev/sdb bs=512 count=1
```

### Смонтируйте разделы и проверьте целостность данных

```sh
sudo mount /dev/sdb1 /mnt/sdb1
sudo mount /dev/sdb2 /mnt/sdb2
sudo mount /dev/sdb3 /mnt/sdb3
sudo mount /dev/sdb5 /mnt/sdb5

ls /mnt/sdb1
ls /mnt/sdb2
ls /mnt/sdb3
ls /mnt/sdb5
```

### Отмонтируйте разделы

```sh
sudo umount /mnt/sdb1
sudo umount /mnt/sdb2
sudo umount /mnt/sdb3
sudo umount /mnt/sdb5
```

### Установите gdisk

```sh
sudo apt-get install gdisk -y
```

### Создайте таблицу разделов GPT (5 первичных разделов) с помощью gdisk

Запуск gdisk:

```sh
sudo gdisk /dev/sdb
```

В интерактивном режиме:

```
o     # создать новую GPT таблицу разделов
n     # создать новый раздел
1     # номер раздела
      # принять значения по умолчанию для начала
+1G   # размер 1GB

n     # создать новый раздел
2     # номер раздела
      # принять значения по умолчанию для начала
+1G   # размер 1GB

n     # создать новый раздел
3     # номер раздела
      # принять значения по умолчанию для начала
+1G   # размер 1GB

n     # создать новый раздел
4     # номер раздела
      # принять значения по умолчанию для начала
+1G   # размер 1GB

n     # создать новый раздел
5     # номер раздела
      # принять значения по умолчанию для начала и конца (все оставшееся пространство)

w     # записать таблицу разделов и выйти
```

### Отформатируйте созданные разделы в файловую систему ext3

```sh
sudo mkfs.ext3 /dev/sdb1
sudo mkfs.ext3 /dev/sdb2
sudo mkfs.ext3 /dev/sdb3
sudo mkfs.ext3 /dev/sdb4
sudo mkfs.ext3 /dev/sdb5
```

### Смонтируйте созданные разделы и создайте там произвольные файлы

```sh
sudo mkdir /mnt/sdb1 /mnt/sdb2 /mnt/sdb3 /mnt/sdb4 /mnt/sdb5
sudo mount /dev/sdb1 /mnt/sdb1
sudo mount /dev/sdb2 /mnt/sdb2
sudo mount /dev/sdb3 /mnt/sdb3
sudo mount /dev/sdb4 /mnt/sdb4
sudo mount /dev/sdb5 /mnt/sdb5

sudo touch /mnt/sdb1/file1.txt
sudo touch /mnt/sdb2/file2.txt
sudo touch /mnt/sdb3/file3.txt
sudo touch /mnt/sdb4/file4.txt
sudo touch /mnt/sdb5/file5.txt
```

### Сделайте резервную копию GPT с помощью утилиты DD

```sh
sudo sgdisk --backup=~/gpt_backup.img /dev/sdb
```

### Сотрите GPT с помощью утилиты DD

```sh
sudo dd if=/dev/zero of=/dev/sdb bs=512 count=2048
```

### Восстановите GPT с помощью утилиты DD

```sh
sudo sgdisk --load-backup=~/gpt_backup.img /dev/sdb
```

### Смонтируйте разделы и проверьте целостность данных

```sh
sudo mount /dev/sdb1 /mnt/sdb1
sudo mount /dev/sdb2 /mnt/sdb2
sudo mount /dev/sdb3 /mnt/sdb3
sudo mount /dev/sdb4 /mnt/sdb4
sudo mount /dev/sdb5 /mnt/sdb5

ls /mnt/sdb1
ls /mnt/sdb2
ls /mnt/sdb3
ls /mnt/sdb4
ls /mnt/sdb5
```

### Отмонтируйте разделы

```sh
sudo umount /mnt/sdb1
sudo umount /mnt/sdb2
sudo umount /mnt/sdb3
sudo umount /mnt/sdb4
sudo umount /mnt/sdb5
```

### Достоинства и недостатки таблиц разделов MBR и GPT

#### MBR:
*Достоинства:*
- Широко поддерживается различными операционными системами.
- Простота использования.

*Недостатки:*
- Поддержка дисков только до 2 ТБ.
- Максимум 4 первичных раздела (можно создать больше, используя логические разделы внутри расширенного).
- Ограниченные возможности по восстановлению.

#### GPT:
*Достоинства:*
- Поддержка дисков объемом более 2 ТБ.
- Возможность создания до 128 первичных разделов без использования логических.
- Встроенные механизмы для резервного копирования и восстановления таблицы разделов.
- Повышенная надежность и целостность данных.

*Недостатки:*
- Ограниченная поддержка старыми операционными системами и BIOS.
- Более сложная структура по сравнению с MBR.





## Работа №5
```sh
#!/bin/sh


# Запуск fdisk (gdisk или parted) и создание таблицы разделов MBR с разделами
# (Предполагается, что у вас есть необходимые разделы для создания)
fdisk /dev/sdX

# Отформатирование созданных разделов в файловую систему ext4
mkfs.ext4 /dev/sdX1
mkfs.ext4 /dev/sdX2
# Продолжайте для всех созданных разделов

# Установка TestDisk
# (Предполагается, что TestDisk доступен в репозиториях вашего дистрибутива)
sudo apt-get install testdisk

# Удаление MBR (или таблицы разделов) с помощью команды DD
# ПРЕДУПРЕЖДЕНИЕ: Это опасная операция, убедитесь, что выбрали правильное устройство
sudo dd if=/dev/zero of=/dev/sdX bs=512 count=1

# Восстановление MBR (или таблицы разделов) с помощью TestDisk
testdisk /dev/sdX

# Монтирование восстановленных разделов и создание там произвольных файлов
sudo mount /dev/sdX1 /mnt/recovery1
sudo mount /dev/sdX2 /mnt/recovery2
# Продолжайте для всех восстановленных разделов

# Создание произвольных файлов
touch /mnt/recovery1/file1.txt
echo "Hello" > /mnt/recovery2/file2.txt
# Продолжайте создание файлов в других разделах

# Удаление созданных файлов
rm /mnt/recovery1/file1.txt
rm /mnt/recovery2/file2.txt
# Продолжайте удаление файлов в других разделах

# Восстановление данных с помощью TestDisk
###### IMAGES MUST BE HERE
# (Выполняется после удаления файлов)

# Создание произвольного каталога и запись туда данных каталога /var/log/
mkdir /mnt/recovery3
cp -r /var/log/* /mnt/recovery3

# Удаление данных с созданного каталога
rm -rf /mnt/recovery3/*

# Восстановление данных с помощью PhotoRec
###### IMAGES MUST BE HERE
# (Выполняется после удаления данных с каталога)

# Создание произвольного каталога и запись туда данных каталога /etc/
mkdir /mnt/recovery4
cp -r /etc/* /mnt/recovery4

# Восстановление данных с помощью Extundelete или Foremost
###### IMAGES MUST BE HERE
# (Выполняется после удаления данных с каталога)
```



## Работа №6
```sh
sudo groupadd stud3k

sudo groupadd inai-db-colloq stud51
sudo groupadd inai-db-colloq stud52
sudo groupadd inai-db-colloq stud53
sudo groupadd inai-db-colloq stud54
```






## Работа №7

Создание программы на языке C, которая создает два дочерних процесса с использованием двух вызовов `fork()`, выводит PID, PPID и текущее время, и выполняет команду `ps -x` в родительском процессе.

Вот пример программы:

```c
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <sys/types.h>
#include <sys/wait.h>
#include <time.h>
#include <sys/time.h>

void print_process_info() {
    struct timeval tv;
    gettimeofday(&tv, NULL);
    struct tm* ptm = localtime(&tv.tv_sec);
    char time_string[40];
    strftime(time_string, sizeof(time_string), "%H:%M:%S", ptm);
    printf("PID: %d, PPID: %d, Time: %s:%03ld\n", getpid(), getppid(), time_string, tv.tv_usec / 1000);
}

int main() {
    pid_t pid1, pid2;

    // First fork
    pid1 = fork();

    if (pid1 < 0) {
        perror("Fork failed");
        exit(1);
    }

    if (pid1 ## 0) { // First child process
        print_process_info();
        exit(0);
    } else { // Parent process
        // Second fork
        pid2 = fork();

        if (pid2 < 0) {
            perror("Fork failed");
            exit(1);
        }

        if (pid2 ## 0) { // Second child process
            print_process_info();
            exit(0);
        } else { // Parent process
            print_process_info();

            // Wait for both children to finish
            wait(NULL);
            wait(NULL);

            // Execute ps -x command
            printf("Executing ps -x in parent process:\n");
            system("ps -x");
        }
    }

    return 0;
}
```

### Объяснение кода:

+ *Функция `print_process_info()`*:
    - Получает текущее время с помощью `gettimeofday()`.
    - Преобразует его в человекочитаемый формат с помощью `localtime()` и `strftime()`.
    - Печатает PID текущего процесса, PPID (PID родительского процесса) и текущее время с миллисекундами.

+ *Вызов `fork()`*:
    - Первый вызов `fork()` создает первый дочерний процесс. Если это дочерний процесс, он выводит свою информацию и завершает работу.
    - Если это родительский процесс, он продолжает и вызывает `fork()` снова для создания второго дочернего процесса.
    - Второй дочерний процесс также выводит свою информацию и завершает работу.

+ *В родительском процессе*:
    - После создания двух дочерних процессов, родительский процесс выводит свою информацию.
    - Ожидает завершения обоих дочерних процессов с помощью `wait()`.
    - Выполняет команду `ps -x` для отображения списка запущенных процессов.

### Компиляция и запуск:

Сохраните этот код в файл, например, `processes.c`, и выполните следующие команды в терминале для компиляции и запуска программы:

```sh
gcc -o processes processes.c
./processes
```

Вывод программы будет содержать информацию о PID, PPID и текущем времени для каждого процесса, а затем список процессов, отображаемых командой `ps -x`, где вы сможете найти свои процессы.





## Работа №8

### Часть 1

### Установить mdadm

```sh
sudo apt-get update
sudo apt-get install mdadm -y
```

### Ознакомиться с утилитой mdadm, ее возможностями и параметрами

```sh
man mdadm
```

### Следить за состоянием файла /proc/mdstat

В отдельном терминале выполните:

```sh
watch cat /proc/mdstat
```

### Собрать RAID 1 с помощью mdadm

```sh
sudo mdadm --create --verbose /dev/md0 --level=1 --raid-devices=2 /dev/sdX /dev/sdY
```

Замените `/dev/sdX` и `/dev/sdY` на ваши устройства.

### Создать на созданном RAID файловую систему ext4

```sh
sudo mkfs.ext4 /dev/md0
```

### Смонтировать созданную файловую систему

```sh
sudo mkdir /mnt/raid1
sudo mount /dev/md0 /mnt/raid1
```

### Записать туда файл raid.txt с произвольным содержимым

```sh
echo "This is a test file for RAID 1" | sudo tee /mnt/raid1/raid.txt
```

### Разрушить один из дисков RAID и проследить за происходящим в файле /proc/mdstat

```sh
sudo mdadm /dev/md0 --fail /dev/sdX
```

Следите за состоянием в отдельном терминале.

### Проверить целостность файла raid.txt

```sh
cat /mnt/raid1/raid.txt
```

### Остановить RAID 1

```sh
sudo umount /mnt/raid1
sudo mdadm --stop /dev/md0
```

### Очистить информацию дисков о принадлежности к программному RAID

```sh
sudo mdadm --zero-superblock /dev/sdX
sudo mdadm --zero-superblock /dev/sdY
```

### Собрать RAID 0 с помощью mdadm

```sh
sudo mdadm --create --verbose /dev/md0 --level=0 --raid-devices=2 /dev/sdX /dev/sdY
```

### Создать на созданном RAID файловую систему ext3

```sh
sudo mkfs.ext3 /dev/md0
```

### Смонтировать созданную файловую систему

```sh
sudo mkdir /mnt/raid0
sudo mount /dev/md0 /mnt/raid0
```

### Записать туда файл raid.txt с произвольным содержимым

```sh
echo "This is a test file for RAID 0" | sudo tee /mnt/raid0/raid.txt
```

### Разрушить один из дисков RAID и проследить за происходящим в файле /proc/mdstat

```sh
sudo mdadm /dev/md0 --fail /dev/sdX
```

Следите за состоянием в отдельном терминале.

### Проверить целостность файла raid.txt

```sh
cat /mnt/raid0/raid.txt
```

### Остановить RAID 0

```sh
sudo umount /mnt/raid0
sudo mdadm --stop /dev/md0
```

### Очистить информацию дисков о принадлежности к программному RAID

```sh
sudo mdadm --zero-superblock /dev/sdX
sudo mdadm --zero-superblock /dev/sdY
```

### Собрать RAID 5 с диском горячей замены с помощью mdadm

```sh
sudo mdadm --create --verbose /dev/md0 --level=5 --raid-devices=3 --spare-devices=1 /dev/sdX /dev/sdY /dev/sdZ /dev/sdW
```

### Создать на созданном RAID файловую систему ext4

```sh
sudo mkfs.ext4 /dev/md0
```

### Смонтировать созданную файловую систему

```sh
sudo mkdir /mnt/raid5
sudo mount /dev/md0 /mnt/raid5
```

### Записать туда файл raid.txt с произвольным содержимым

```sh
echo "This is a test file for RAID 5" | sudo tee /mnt/raid5/raid.txt
```

### Разрушить три диска RAID и проследить за происходящим в файле /proc/mdstat

```sh
sudo mdadm /dev/md0 --fail /dev/sdX
sudo mdadm /dev/md0 --fail /dev/sdY
sudo mdadm /dev/md0 --fail /dev/sdZ
```

Следите за состоянием в отдельном терминале.

### Проверить целостность файла raid.txt

```sh
cat /mnt/raid5/raid.txt
```

### Остановить RAID 5

```sh
sudo umount /mnt/raid5
sudo mdadm --stop /dev/md0
```

### Очистить информацию дисков о принадлежности к программному RAID

```sh
sudo mdadm --zero-superblock /dev/sdX
sudo mdadm --zero-superblock /dev/sdY
sudo mdadm --zero-superblock /dev/sdZ
sudo mdadm --zero-superblock /dev/sdW
```

### Собрать RAID 10 с диском горячей замены с помощью mdadm

```sh
sudo mdadm --create --verbose /dev/md0 --level=10 --raid-devices=4 --spare-devices=1 /dev/sdX /dev/sdY /dev/sdZ /dev/sdW /dev/sdV
```

### Создать на созданном RAID файловую систему ext2

```sh
sudo mkfs.ext2 /dev/md0
```

### Смонтировать созданную файловую систему

```sh
sudo mkdir /mnt/raid10
sudo mount /dev/md0 /mnt/raid10
```

### Записать туда файл raid.txt с произвольным содержимым

```sh
echo "This is a test file for RAID 10" | sudo tee /mnt/raid10/raid.txt
```

### Разрушить два диска RAID и проследить за происходящим в файле /proc/mdstat

```sh
sudo mdadm /dev/md0 --fail /dev/sdX
sudo mdadm /dev/md0 --fail /dev/sdY
```

Следите за состоянием в отдельном терминале.

### Проверить целостность файла raid.txt

```sh
cat /mnt/raid10/raid.txt
```

### Остановить RAID 10

```sh
sudo umount /mnt/raid10
sudo mdadm --stop /dev/md0
```

### Очистить информацию дисков о принадлежности к программному RAID

```sh
sudo mdadm --zero-superblock /dev/sdX
sudo mdadm --zero-superblock /dev/sdY
sudo mdadm --zero-superblock /dev/sdZ
sudo mdadm --zero-superblock /dev/sdW
sudo mdadm --zero-superblock /dev/sdV
```

### Часть 2

### Инициализировать физические диски, поверх которых будет создан LVM

```sh
sudo pvcreate /dev/sdX /dev/sdY /dev/sdZ /dev/sdW
```

### Создать группу томов на основе четырех виртуальных жестких дисков

```sh
sudo vgcreate myvg /dev/sdX /dev/sdY /dev/sdZ /dev/sdW
```

### Создать логический том

```sh
sudo lvcreate -L 10G -n mylv myvg
```

### На созданном логическом томе создать файловую систему

```sh
sudo mkfs.ext4 /dev/myvg/mylv
```

### Смонтировать систему и создать файл LVM.txt

```sh
sudo mkdir /mnt/lvm
sudo mount /dev/myvg/mylv /mnt/lvm
echo "This is a test file for LVM" | sudo tee /mnt/lvm/LVM.txt
```

### Добавить в группу томов еще один виртуальный жесткий диск

```sh
sudo pvcreate /dev/sdV
sudo vgextend myvg /dev/sdV
```

### Определить количество добавленных экстентов

```sh
sudo vgdisplay myvg
```

### Расширить созданный логический том на размер добавленных экстентов

```sh
sudo lvextend -l +100%FREE /dev/myvg/mylv
```

### Увеличить размер файловой системы

```sh
sudo resize2fs /dev/myvg/mylv
```

### Сделать снапшот логического тома

```sh
sudo lvcreate -L 1G -s -n mylv_snapshot /dev/myvg/mylv
```

### Удалить группу томов и снапшот

```sh
sudo umount /mnt/lvm
sudo lvremove /dev/myvg/mylv_snapshot
sudo lvremove /dev/myvg/mylv
sudo vgremove myvg
sudo pvremove /dev/sdX /dev/sdY /dev/sdZ /dev/sdW /dev/sdV
```
