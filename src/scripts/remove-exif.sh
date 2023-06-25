for i in `ls`; do
    exiftool -all= $i
done