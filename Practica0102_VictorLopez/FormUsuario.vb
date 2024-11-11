Public Class FormUsuario
    Private Sub ComboBoxComunidades_SelectedIndexChanged(sender As Object, e As EventArgs) Handles ComboBoxComunidades.SelectedIndexChanged
        Dim comunidadesConProvincias As String()() = {
        New String() {"A Coruña", "Lugo", "Ourense", "Pontevedra"},            ' Galicia
        New String() {"Álava", "Bizkaia", "Gipuzkoa"},                          ' País Vasco
        New String() {"Asturias"},                                              ' Asturias
        New String() {"Cantabria"},                                             ' Cantabria
        New String() {"Barcelona", "Girona", "Lleida", "Tarragona"},            ' Cataluña
        New String() {"Zaragoza", "Huesca", "Teruel"},                          ' Aragón
        New String() {"Illes Balears"},                                         ' Islas Baleares
        New String() {"Las Palmas", "Santa Cruz de Tenerife"},                  ' Canarias
        New String() {"Navarra"},                                               ' Navarra
        New String() {"La Rioja"},                                              ' La Rioja
        New String() {"Madrid"},                                                ' Comunidad de Madrid
        New String() {"Ávila", "Burgos", "León", "Palencia", "Salamanca",
                      "Segovia", "Soria", "Valladolid", "Zamora"},              ' Castilla y León
        New String() {"Albacete", "Ciudad Real", "Cuenca", "Guadalajara",
                      "Toledo"},                                                ' Castilla-La Mancha
        New String() {"Alicante", "Castellón", "Valencia"},                     ' Comunidad Valenciana
        New String() {"Badajoz", "Cáceres"},                                    ' Extremadura
        New String() {"Murcia"},                                                ' Región de Murcia
        New String() {"Cádiz", "Córdoba", "Granada", "Huelva", "Jaén",
                      "Málaga", "Sevilla"},                                     ' Andalucía
        New String() {"Ceuta"},                                                 ' Ceuta
        New String() {"Melilla"}                                                ' Melilla
        }

        If ComboBoxComunidades.SelectedIndex <> -1 Then
            Select Case ComboBoxComunidades.SelectedItem.ToString()
                Case "Andalucía"
                    ponerProvincias(comunidadesConProvincias(16)) ' Andalucía está en el índice 18
                Case "Ceuta"
                    ponerProvincias(comunidadesConProvincias(17)) ' Ceuta está en el índice 19
                Case "Melilla"
                    ponerProvincias(comunidadesConProvincias(18)) ' Melilla está en el índice 20
                Case "Murcia"
                    ponerProvincias(comunidadesConProvincias(15)) ' Región de Murcia está en el índice 17
                Case "Extremadura"
                    ponerProvincias(comunidadesConProvincias(14)) ' Extremadura está en el índice 16
                Case "Comunidad Valenciana"
                    ponerProvincias(comunidadesConProvincias(13)) ' Comunidad Valenciana está en el índice 14
                Case "Castilla-La Mancha"
                    ponerProvincias(comunidadesConProvincias(12)) ' Castilla-La Mancha está en el índice 13
                Case "Castilla y León"
                    ponerProvincias(comunidadesConProvincias(11)) ' Castilla y León está en el índice 12
                Case "Madrid"
                    ponerProvincias(comunidadesConProvincias(10)) ' Madrid está en el índice 11
                Case "La Rioja"
                    ponerProvincias(comunidadesConProvincias(9)) ' La Rioja está en el índice 10
                Case "Navarra"
                    ponerProvincias(comunidadesConProvincias(8))  ' Navarra está en el índice 9
                Case "Canarias"
                    ponerProvincias(comunidadesConProvincias(7))  ' Canarias está en el índice 7
                Case "Islas Baleares"
                    ponerProvincias(comunidadesConProvincias(6))  ' Islas Baleares está en el índice 6
                Case "Aragón"
                    ponerProvincias(comunidadesConProvincias(5))  ' Aragón está en el índice 5
                Case "Cataluña"
                    ponerProvincias(comunidadesConProvincias(4))  ' Cataluña está en el índice 4
                Case "Asturias"
                    ponerProvincias(comunidadesConProvincias(2)) ' Asturias está en el índice 2
                Case "País Vasco"
                    ponerProvincias(comunidadesConProvincias(1)) ' País Vasco está en el índice 1
                Case "Cantabria"
                    ponerProvincias(comunidadesConProvincias(3))  ' Cantabria está en el índice 3
                Case "Galicia"
                    ponerProvincias(comunidadesConProvincias(0))  ' Galicia está en el índice 0
                Case Else
                    MessageBox.Show("Comunidad no encontrada.")
            End Select
        End If
    End Sub


    Private Sub ponerProvincias(ByVal provincias As String())
        ListBoxProvincias.Items.Clear()
        For Each provincia In provincias
            Dim item As String = provincia

            ListBoxProvincias.Items.Add(item)
        Next
    End Sub


    Private Sub ButtonValidar_Click(sender As Object, e As EventArgs) Handles ButtonValidar.Click
        If String.IsNullOrWhiteSpace(TextBoxNombre.Text) Then
            MessageBox.Show("Tienes que introducir un nombre")
        ElseIf String.IsNullOrWhiteSpace(TextBoxApellido.Text) Then
            MessageBox.Show("Tienes que introducir un apellido")
        ElseIf ComboBoxComunidades.SelectedIndex = -1 Then
            MessageBox.Show("Tienes que seleccionar una comunidad")
        ElseIf ListBoxProvincias.SelectedIndex = -1 Then
            MessageBox.Show("Tienes que seleccionar una provincia")
        End If

        Dim estadoCivilSeleccionado As Boolean = GroupBoxEstadoCivil.Controls.OfType(Of RadioButton)().Any(Function(rbtn) rbtn.Checked)
        If Not estadoCivilSeleccionado Then
            MessageBox.Show("Tienes que seleccionar un estado civil")
        End If

        Dim sexoSeleccionado As Boolean = PanelSexo.Controls.OfType(Of RadioButton)().Any(Function(rbtn) rbtn.Checked)
        If Not sexoSeleccionado Then
            MessageBox.Show("Tienes que seleccionar un sexo")
        End If

        Dim actividadSeleccionada As Boolean = GroupBoxActividades.Controls.OfType(Of CheckBox)().Any(Function(chk) chk.Checked)
        If Not actividadSeleccionada Then
            MessageBox.Show("")
        End If

    End Sub



    Private Sub ButtonAñadir_Click(sender As Object, e As EventArgs) Handles ButtonAñadir.Click
        If String.IsNullOrWhiteSpace(TextBoxTitulacion.Text) Then
            MessageBox.Show("El campo titulacion está vacío. Por favor, ingrese un valor.")
        Else
            If String.IsNullOrWhiteSpace(TextBoxCentro.Text) Then
                MessageBox.Show("El campo centro está vacío. Por favor, ingrese un valor.")
            Else
                If NumericUpDown1.Value < NumericUpDown1.Minimum Or NumericUpDown1.Value > NumericUpDown1.Maximum Then
                    MessageBox.Show("El campo año de finalizacion tiene que estar entre 1900 y 2999.")
                Else
                    Dim item As New ListViewItem(TextBoxTitulacion.Text)
                    item.SubItems.Add(TextBoxCentro.Text)
                    item.SubItems.Add(NumericUpDown1.Value.ToString())
                    ListView1.Items.Add(item)
                    TextBoxTitulacion.Clear()
                    TextBoxCentro.Clear()
                End If
            End If
        End If

    End Sub

    Private Sub ButtonAñadirIdiomas_Click(sender As Object, e As EventArgs) Handles ButtonAñadirIdiomas.Click
        If String.IsNullOrWhiteSpace(TextBoxIdioma.Text) Then
            MessageBox.Show("Tienes que introducir un idioma")
        ElseIf ComboBoxIdiomas.SelectedIndex = -1 Then
            MessageBox.Show("Tienes que introducir un nivel")
        Else
            Dim item As String = TextBoxIdioma.Text & " - " & ComboBoxIdiomas.Text
            ListBox2.Items.Add(item)
            TextBoxIdioma.Clear()
            ComboBoxIdiomas.ResetText()
        End If
    End Sub

    Private Sub ButtonAñadirEmpresa_Click(sender As Object, e As EventArgs) Handles ButtonAñadirEmpresa.Click
        If String.IsNullOrWhiteSpace(TextBoxPTrabajo.Text) Then
            MessageBox.Show("Tienes que introducir un puesto de trabajo")
        ElseIf String.IsNullOrWhiteSpace(TextBoxEmpresa.Text) Then
            MessageBox.Show("Tienes que introducir unam empresa")
        Else
            Dim item As New ListViewItem(TextBoxPTrabajo.Text)
            item.SubItems.Add(TextBoxEmpresa.Text)
            item.SubItems.Add(DateTimePickerINI.Value)
            item.SubItems.Add(DateTimePickerFIN.Value)
            ListViewEmpresa.Items.Add(item)
            TextBoxPTrabajo.Clear()
            TextBoxEmpresa.Clear()
            DateTimePickerINI.Refresh()


        End If
    End Sub

    Private Sub ButtonCerrar_Click(sender As Object, e As EventArgs) Handles ButtonCerrar.Click
        Me.Close()
    End Sub
End Class