for i in `ls *.HEIC`; do
	output=$(echo $i | sed 's/.HEIC/.png/g')
	heif-convert $i $output
done
