array="["
for i in `ls ../../static/showcase`; do
    entry="'$i'"
    newArray="$array, $entry"
    array="$newArray"
done
echo "~~~~~~~~~~~ Array ~~~~~~~~~~~"
echo "$array"