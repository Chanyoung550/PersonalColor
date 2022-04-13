#!/bin/bash

dirpath=$1
imagepath=$2


source /Users/chan/opt/anaconda3/etc/profile.d/conda.sh 
conda activate pcolor 
python /Users/chan/PersonalColor/pcbackend/src/main/resources/static/src/main.py --image /Users/chan/PersonalColor/pcbackend/src/main/resources/static/images/$dirpath/$imagepath --imgDirPath $dirpath
