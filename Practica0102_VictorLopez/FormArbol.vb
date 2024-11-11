Public Class FormArbol
    Private Sub FormArbol_Load(sender As Object, e As EventArgs) Handles MyBase.Load
        LabelTitulo.Location = New Point((Me.ClientSize.Width - LabelTitulo.Width) / 2, LabelTitulo.Location.Y)
    End Sub

    Private Sub ButtonAñadir_Click(sender As Object, e As EventArgs) Handles ButtonAñadir.Click
        If String.IsNullOrWhiteSpace(TextBoxNombre.Text) Then
            MessageBox.Show("Por favor, introduce un nombre para el nodo.", "Error", MessageBoxButtons.OK, MessageBoxIcon.Error)
            Return
        End If

        If TreeView1.SelectedNode IsNot Nothing Then
            ' Verificar si el nodo seleccionado tiene menos de 2 nodos hijos
            If TreeView1.SelectedNode.Nodes.Count < 2 Then
                ' Añadir un nuevo nodo hijo al nodo seleccionado
                Dim nuevoNodo As New TreeNode(TextBoxNombre.Text)
                TreeView1.SelectedNode.Nodes.Add(nuevoNodo)
                TreeView1.SelectedNode.Expand() ' Expande el nodo padre para mostrar el nuevo nodo
            Else
                MessageBox.Show("Este nodo ya tiene el máximo de 2 nodos hijos.", "Error", MessageBoxButtons.OK, MessageBoxIcon.Error)
            End If
        Else
            ' Si no hay nodos en el TreeView, añadir un nodo de nivel superior
            If TreeView1.Nodes.Count < 1 Then
                Dim nuevoNodo As New TreeNode(TextBoxNombre.Text)
                TreeView1.Nodes.Add(nuevoNodo)
            Else
                MessageBox.Show("Por favor, selecciona un nodo existente para añadir un hijo.", "Error", MessageBoxButtons.OK, MessageBoxIcon.Error)
            End If
        End If
        TextBoxNombre.Clear()
    End Sub

    Private Sub ButtonCerrar_Click(sender As Object, e As EventArgs) Handles ButtonCerrar.Click
        Me.Close()
    End Sub


End Class