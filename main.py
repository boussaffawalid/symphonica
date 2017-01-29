import urllib
import zipfile
import nottingham_util
import rnn

# collect the data
zip = zipfile.ZipFile(r'dataset.zip')  
zip.extractall('data')  

# build the model
# nottingham_util.create_model()

# train the model
rnn.train_model()
